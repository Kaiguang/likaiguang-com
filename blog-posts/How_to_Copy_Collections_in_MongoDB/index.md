---
title: How to Copy Collections in MongoDB
date: 2019-09-16
tags:
  - MongoDB
---

I want to copy a collection from production db to development db, the two dbs are under the same mongod instance.

I can use the following commands to perform a copy, but the \_id will mostly likely be changed during the inserting process.

In mongo shell:

```
use production-db
db.COLLECTION_NAME.find().forEach(function(d){ db.getSiblingDB('development-db')['COLLECTION_NAME'].insert(d); });
```

From MongoDB Doc:

> For standalone or a replica set, mongodump can be a part of a backup strategy with mongorestore for partial backups based on a query, syncing from production to staging or development environments, or changing the storage engine of a standalone.

> Starting in MongoDB 4.2, mongodump and mongorestore cannot be part of a backup strategy for sharded clusters. These manual tools do not maintain the atomicity guarantees of transactions across shards.
