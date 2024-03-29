---
title: 'Git Tips'
date: '2020-07-28'
tags:
  - Git
---

I got inspired by this great [git-tips/tips](https://github.com/git-tips/tips) repo and want to generate my own list based on my personal usage.

It is always good to check out the [official docs](https://git-scm.com/docs) if you want a detailed explanation, or the man-page (Git Manual) for each git command.

## Set up local git user

```shell
git config --global user.name "Your Name"
git config --global user.email "yourEmailAddress@users.noreply.github.com"
```

## Configure for global gitignore file

```shell
git config --global core.excludesfile ~/.gitignore_global
```

Then create a **.gitignore_global** file under the home directory.

## Show all untracked files and untracked directories

```shell
git status -u
```

`-u` option defaults to `-uall` which shows all individual files in untracked directories. Without the `-u` option, the command will only show untracked files and directories, but not the files inside of those directories.

## Show changes between commits, commit and working tree, etc.

```shell
git diff

# show the numbers of lines changes
git diff --stat
```

## Show all the commit history including all remotes, branches, tags

```shell
git log --remotes --branches --tags --graph --oneline
```

## Limit the number of logs

```shell
git log -n <number>
```

## Search logs by commit messages

```shell
git log -i --grep=<pattern>
```

- `-i` or `--regexp-ignore-case` ignore case
- `--grep=<pattern>` limit the log messages matching the `<pattern>`

## Search logs by file or code changed

```shell
git log -S<string>
```

Search by string, binary files are also searched, good for tracking a block of code.

## Search log by file name and/or directory

```shell
git log -- </dir/filename>
```

## Show commit history with a custom format

```shell
git log --pretty=format:'%C(yellow)%h%C(reset) - %an %Cgreen[%ar]%Creset %s'
```

This is just an example, more customization can be achieved.

- `%h` abbreviated commit hash
- `%an` author name
- `%ar` author date, relative
- `%s` subject
- `%C(yellow)` or `%Cgreen` color specification
- `%C(reset)` or `%Creset` reset color

## Shows a commit's log message and textual diff

```shell
git show <commit_hash>
```

## Show the last modified revision and author of each line of a file

```shell
git blame </dir/filename>
```

## Rebase all commits reachable from the current branch.

```shell
git rebase -i --root
```

## Delete a local branch

```shell
git branch -d <branch>
```

## List tags

```shell
git tag
```

## Add a local tag

```shell
git tag <tag>               # from the current commit
git tag <tag> <commit_hash> # from a different commit
```

## Delete local tags

```shell
git tag -d <tag>      # single tag
git tag -d $(git tag) # all tags
```

## Change capitalization of filenames

```shell
git mv example.txt Example.txt
```

Simply changing the filename by `mv example.txt Example.txt` won't work in macOS because it's case preserving but case insensitive. In the future it will cause path collision. So avoid changing the filename directly; use `git mv` to change filenames.

## Remove (prune) remote-tracking branches that no longer exist in the remote

```shell
git fetch -p # prune
```

## Push a local branch to remote and set up remote-tracking

```shell
git push -u <remote> <branch>
```

## Delete a remote branch

```shell
git push -d <remote> <branch>
git push <remote> :<branch>   # alternative, using the ref syntax
```

## Push local tags to remotes

```shell
git push <remote> <tag>  # single tag
git push <remote> --tags # all tags
```

## Delete remote tags

```shell
git push -d <remote> <tag>         # single tag
git push -d <remote> $(git tag)    # all tags
git push <remote> :refs/tags/<tag> # alternative, using the refs syntax
```
