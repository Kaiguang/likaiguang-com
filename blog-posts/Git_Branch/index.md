---
title: "Git: Branch"
date: 2020-10-13
originalDate: 2020-08-15
tags:
  - Git
  - GitHub
---

## 1. Push a new branch to remote repo

```shell
$ git push -u <remote> <branch>

# example
$ git push -u origin master
```

`-u` is short for `--set-upstream`.

## 2. Delete a branch in local repo

```shell
$ git branch -d <branch>
```

`-d` is short for `--delete`.

## 3. Delete a branch in remote repo

```shell
$ git push <remote> -d <remote-branch>
$ git push <remote> :<remote-branch>    # alternative by using refs
```

## 4. Reference

[Git - git-branch Documentation](https://git-scm.com/docs/git-branch)
[Git - git-push Documentation](https://git-scm.com/docs/git-push)
