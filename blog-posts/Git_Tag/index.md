---
title: "Git: Tag"
date: 2020-03-23
tags:
  - Git
  - GitHub
---

```shell
# List tags
$ git tag

# Add simple local tag
$ git tag <tag>               # from the current commit
$ git tag <tag> <commit_hash> # from a different commit

# Delete local tag
$ git tag -d <tag>

# Push tag to remote
$ git push origin <tag>  # single tag
$ git push origin --tags # all tags

# Delete a remote tag
$ git push origin --delete <tag>
$ git push origin :refs/tags/<tag> # using the refs syntax
```
