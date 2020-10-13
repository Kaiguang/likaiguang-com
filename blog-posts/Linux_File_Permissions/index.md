---
title: Linux File Permissions
date: 2020-05-08
tags:
  - Linux
---

Here is a cheat sheet for Linux file permissions for the three groups: user, group, other.

```
User Group Everyone
rwx   rwx    rwx
|||   |||    |||
421   421    421
|||   |||    |||
\ /   \ /    \ /
 7     7      7
```

```shell
$ chmod <mode> <file>

# example to change the script.sh file to rwxrwxr-- permission
$ chmod 774 script.sh
```
