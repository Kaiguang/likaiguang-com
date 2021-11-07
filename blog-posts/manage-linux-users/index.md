---
title: Manage Linux Users
date: 2021-11-06
tags:
  - Linux
---

## A Friendly Way to Add New Users

For Debian and Ubuntu:

```sh
# add a new user tom
sudo adduser tom

# add tom to sudo group
sudo adduser tom sudo

# delete the user tom
sudo deluser tom
```

The default config should ask you to set the password for the user. After you set the first password for tom, you can use `sudo passwd -e tom` to expire the password and force tom to set a new password upon login.

## Low Level Utilities

Other than the friendly way to manage user, there are also low level utilities to manage users, notice any different below?

```sh
# low level utilities
useradd
userdel

# Debian/Ubuntu friendly front ends
adduser
deluser
```
