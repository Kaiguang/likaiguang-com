# Git Aliases

```plain text title="~/.gitconfig"
[alias]
  l = log --all --graph --oneline
  # Log with author and date
  la = log --all --graph --pretty=format:'%C(dim yellow)%h%C(reset) %C(green)%as%C(reset) %C(dim)%<(20,trunc)%an%C(reset) %C(bold red)%d%C(reset) %s'
  s = status --untracked-files
```
