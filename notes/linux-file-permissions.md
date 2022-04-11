---
title: 'Linux File Permissions'
date: '2019-10-05'
tags:
  - Linux
  - shell
---

A cheat sheet for Linux file permissions for the three groups: user, group, other.

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
chmod <mode> <file>

# example to change the script.sh file to rwxrwxr-- permission
chmod 774 script.sh
```

The **<mode\>** can be either absolute like above, or symbolic `a+x` like below.

```shell
# add the execution bit to the files' current permission for all (user, group, other)
chmod a+x script.sh
```
