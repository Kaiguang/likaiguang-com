---
title: "Git: Fetch and Prune"
date: 2020-10-12
tags:
  - Git
  - GitHub
---

One day, I deleted a `<branch>` on my remote (GitHub) repo, however my local git still has that `<branch>` and its tracking remote.

I deleted the local branch with `$ git branch -d <branch>` with no problem. But when I run `$ git branch -a` it still shows I'm tracking the remote branch `remotes/origin/<branch>`.

To remove this remote-tracking branch from my local repo, I ran the `$ git fetch -p`, the `-p | --prune` option removed all the remote-tracking references that no longer exist on the remote before fetching.
