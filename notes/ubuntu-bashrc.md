---
title: 'Ubuntu .bashrc'
date: '2021-06-29'
tags:
  - config
  - Linux
  - shell
---

```shell
# file: ~/.bashrc

# ...

# Show Git Branch Info
# Ubuntu usually provides a default PS1 with colors and info already set.
# This can be added to the PS1 variable at a location you see fit.
# Example:
source /usr/lib/git-core/git-sh-prompt
export GIT_PS1_SHOWDIRTYSTATE=1
if [ "$color_prompt" = yes ]; then
    PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\[\033[33m\]$(__git_ps1)\[\033[00m\]\$ '
else
    PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '
fi
unset color_prompt force_color_prompt

# ...
```
