---
title: "Git: Manage Remote Branches"
date: 2020-08-15
tags:
  - Git
---

## 1. Push a new branch to remote repo

```shell
$ git push -u <remote> <branch>

# example
$ git push -u origin master
```

`-u` is short for `--set-upstream`.

## 2. Delete a branch in remote repo

```shell
$ git push -d <remote> <branch>
```

`-d` is short for `--delete`.

## 3. Reference

[Git - git-push Documentation](https://git-scm.com/docs/git-push)
