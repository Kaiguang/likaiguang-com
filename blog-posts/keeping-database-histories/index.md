---
title: Keeping Database Histories
date: 2021-08-17
tags:
  - Database
---

We want to compare two different patterns of preserving data for machine learning. One is to design the SQL table as insert-only, so that any update will result an extra row; another is to create a separate history table to record the history of changes.

## Insert-Only Example

**As a starting point, we have 1 product in our products table.**

| **id** | **name**  | **price** | **timeCreated**          | **timeDeleted** |
| ------ | --------- | --------- | ------------------------ | --------------- |
| 1      | Hamburger | 1000      | 2021-08-17T18:40:00.000Z | null            |

**When we want to update the name to "Cheese Hamburger".**

| **id** | **name**                                           | **price** | **timeCreated**          | **timeDeleted**          |
| ------ | -------------------------------------------------- | --------- | ------------------------ | ------------------------ |
| 1      | Hamburger                                          | 1000      | 2021-08-17T18:40:00.000Z | 2021-08-17T18:41:00.000Z |
| 2      | <span style="color: blue;">Cheese Hamburger</span> | 1000      | 2021-08-17T18:41:00.000Z | null                     |

**When we want to update the price to "1500".**

| **id** | **name**         | **price**                              | **timeCreated**          | **timeDeleted**          |
| ------ | ---------------- | -------------------------------------- | ------------------------ | ------------------------ |
| 1      | Hamburger        | 1000                                   | 2021-08-17T18:40:00.000Z | 2021-08-17T18:41:00.000Z |
| 2      | Cheese Hamburger | 1000                                   | 2021-08-17T18:41:00.000Z | 2021-08-17T18:42:00.000Z |
| 3      | Cheese Hamburger | <span style="color: blue;">1500</span> | 2021-08-17T18:42:00.000Z | null                     |

We only keep one table, but the table size grows on every update we make. And we need to manage the changing _id_ of the same item.

<div style="page-break-after: always;"></div>

## History Table Example

**Same starting point, but we have 2 extra tables to record the history of _name_ column and _price_ column.**

| **id** | **name**  | **price** | **timeCreated**          | **timeDeleted** |
| ------ | --------- | --------- | ------------------------ | --------------- |
| 1      | Hamburger | 1000      | 2021-08-17T18:40:00.000Z | null            |

| **productId** | **name**  | **timeUpdated**          |
| ------------- | --------- | ------------------------ |
| 1             | Hamburger | 2021-08-17T18:40:00.000Z |

| **productId** | **price** | **timeUpdated**          |
| ------------- | --------- | ------------------------ |
| 1             | 1000      | 2021-08-17T18:40:00.000Z |

**When we want to update the name to "Cheese Hamburger".**

| **id** | **name**                                           | **price** | **timeCreated**          | **timeDeleted** |
| ------ | -------------------------------------------------- | --------- | ------------------------ | --------------- |
| 1      | <span style="color: blue;">Cheese Hamburger</span> | 1000      | 2021-08-17T18:40:00.000Z | null            |

| **productId** | **name**                                           | **timeUpdated**          |
| ------------- | -------------------------------------------------- | ------------------------ |
| 1             | Hamburger                                          | 2021-08-17T18:40:00.000Z |
| 1             | <span style="color: blue;">Cheese Hamburger</span> | 2021-08-17T18:41:00.000Z |

| **productId** | **price** | **timeUpdated**          |
| ------------- | --------- | ------------------------ |
| 1             | 1000      | 2021-08-17T18:40:00.000Z |

**When we want to update the price to "1500".**

| **id** | **name**         | **price**                              | **timeCreated**          | **timeDeleted** |
| ------ | ---------------- | -------------------------------------- | ------------------------ | --------------- |
| 1      | Cheese Hamburger | <span style="color: blue;">1500</span> | 2021-08-17T18:40:00.000Z | null            |

| **productId** | **name**         | **timeUpdated**          |
| ------------- | ---------------- | ------------------------ |
| 1             | Hamburger        | 2021-08-17T18:40:00.000Z |
| 1             | Cheese Hamburger | 2021-08-17T18:41:00.000Z |

| **productId** | **price**                              | **timeUpdated**          |
| ------------- | -------------------------------------- | ------------------------ |
| 1             | 1000                                   | 2021-08-17T18:40:00.000Z |
| 1             | <span style="color: blue;">1500</span> | 2021-08-17T18:42:00.000Z |

By keeping history tables, we only keep the live and active data in _products_ table, it keeps the _id_ stable, and we can query/update as usual. The changes are simply recorded in the _product name history_ and _product price history_ tables.

<div style="page-break-after: always;"></div>

## Question

Which pattern would you like to adopt and what are your thoughts?
