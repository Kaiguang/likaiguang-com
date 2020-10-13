---
title: "Git: Show History"
date: 2019-10-14
tags:
  - Git
---

```shell
# shows a commit's log message and textual diff
$ git show <commit_hash>

# -n limits the number of lines
$ git log --oneline --graph -n 20

# %h abbreviated commit hash
# %an author name
# %ar author date, relative
# %s subject
# %C(yellow) and %Cgreen color specification
# %C(reset) and %Creset reset color
$ git log --pretty=format:'%C(yellow)%h%C(reset) - %an %Cgreen[%ar]%Creset %s'

# search by commit messages
# -i or --regexp-ignore-case match the regular expression limiting patterns without regard to letter case
# --grep=<pattern> limit the log messages matching the <pattern>
$ git log -i --grep=<pattern>

# search by string, binary file also searched, good for tracking a block of code
$ git log -S<string>

# search by file name, can specify directories
$ git log -- </dir/filename>

# show the last modified revision and author of each line of a file
$ git blame </dir/filename>
```
