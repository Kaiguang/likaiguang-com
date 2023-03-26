---
title: 'Git Aliases'
date: '2021-10-11'
tags:
  - Git
  - config
---

```plain text
# file: ~/.gitconfig

[alias]
        b = branch
        ba = branch --all
        c = commit
        ch = checkout
        l = log --all --graph --oneline
        # Log with author and date
        la = log --all --graph --date=local --pretty=format:'%C(dim yellow)%h%C(reset) %C(green)%ad%C(reset) %C(dim)%an%C(reset)%C(bold red)%d%C(reset) %s'
        p = pull --prune
        s = status --untracked-files
        su = submodule update --remote --merge
        sp = submodule foreach 'git ch master && git p'
[pull]
        ff = only
[core]
        editor = nvim
```
