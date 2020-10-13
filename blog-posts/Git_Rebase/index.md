---
title: "Git: Rebase"
date: 2019-12-05
tags:
  - Git
---

```shell
# Use rebase's interactive mode to drop, reword, squash, reorder previous commits.
$ git rebase -i <after-this-commit>

# Rebase all commits reachable from the current branch.
$ git rebase -i --root
```

You can also find more details by running shell commands `man git-base` or `git rebase --help`. Of course, reading through the official documentation or book is the best way to learn about git.

Reference: [Git - git-rebase Documentation](https://git-scm.com/docs/git-rebase)
