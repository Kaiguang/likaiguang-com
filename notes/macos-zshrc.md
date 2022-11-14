---
title: 'macOS .zshrc'
date: '2021-06-29'
tags:
  - config
  - macOS
  - Zsh
---

```shell
# file: ~/.zshrc

# git auto completion
autoload -Uz compinit && compinit

# show git info
autoload -Uz vcs_info
precmd_vcs_info() { vcs_info }
precmd_functions+=( precmd_vcs_info )
setopt prompt_subst
zstyle ':vcs_info:git:*' formats '%F{yellow}(%r:%b)%f'

# prompt
export PS1='%F{yellow}[%D{%y-%m-%f} %D{%H:%M:%S}]%f %F{green}%n@%m%f:%F{cyan}%~%f${vcs_info_msg_0_}%# '

# Aliases
alias ll='ls -alFGh'
alias history='history 1'

# terminal tab title
DISABLE_AUTO_TITLE="true"
precmd() {
  echo -ne "\e]1;${PWD##*/}\a"
}
```
