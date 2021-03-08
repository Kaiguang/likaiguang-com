---
title: Personalize Zsh Shell
date: 2021-03-08
originalDate: 2019-08-24
tags:
  - Shell
  - Zsh
---

What do I put into my Zsh startup files?

## Startup Files

```
/etc/zshenv     always run for every zsh.
~/.zshenv       usually run for every zsh, with some notes.

/etc/zprofile   run for login shells.
~/.zprofile     run for login shells.

/etc/zshrc      run for interactive shells.
~/.zshrc        run for interactive shells.

/etc/zlogin     run for login shells.
~/.zlogin       run for login shells.
```

## Customize the Startup File `~/.zshrc`

### Gather Information from Version Control Systems

Zsh doc can be found [here](http://zsh.sourceforge.net/Doc/Release/User-Contributions.html#Version-Control-Information), for displaying branch name in the shell prompt.

```
autoload -Uz vcs_info
precmd() { vcs_info }
zstyle ':vcs_info:git:\*' formats '%F{green}branch:%b%f '
setopt PROMPT_SUBST
```

About [`autoload` autoloading functions](http://zsh.sourceforge.net/Doc/Release/Functions.html#Autoloading-Functions).

> The usual alias expansion during reading will be suppressed if the `autoload` builtin or its equivalent is given the option `-U`. This is recommended for the use of functions supplied with the zsh distribution. Note that for functions precompiled with the `zcompile` builtin command the flag `-U` must be provided when the `.zwc` file is created, as the corresponding information is compiled into the latter.

> The flags `-z` and `-k` mark the function to be autoloaded using the zsh or ksh style, as if the option `KSH_AUTOLOAD` were unset or were set, respectively. The flags override the setting of the option at the time the function is loaded.

About [`precmd` hook functions](http://zsh.sourceforge.net/Doc/Release/Functions.html#Hook-Functions).

> Executed before each prompt. Note that precommand functions are not re-executed simply because the command line is redrawn, as happens, for example, when a notification about an exiting job is displayed.

`zstyle` is a builtin command in the `zsh/zutil` module.

`%F (%f)` Start (stop) a different foreground color.

`setopt` sets the options for the shell.

> To be able to use `’${vcs_info_msg_0_}’` directly in your prompt like this, you will need to have the `PROMPT_SUBST` option enabled.

### The Shell Prompt

```
# prompt
export PS1='🦖 %n %B%U%~%u%b ${vcs_info_msg_0_}%# '
```

Check Zsh manual or user guide for [prompt expansion](http://zsh.sourceforge.net/Doc/Release/Prompt-Expansion.html#Prompt-Expansion).

- `%n` Username
- `%B (%b)` Start (stop) boldface mode
- `%U (%u)` Start (stop) underline mode
- `%~` Current working directory, with `$Home` replaced by `~`
- `%#` Display '#' if shell is running with privileges, display '%' if not

### Aliases

```shell
# aliases
alias ll='ls -alFG'
alias sd='say "process completed."' # (macOS)
alias history='history 1'

# git
alias gs='git status -u'
alias gc='git commit'
alias gb='git branch'
alias gl='git log --remotes --branches --tags --graph --oneline'
```

## Note

_It's always the best to refer to the official Zsh manual and user guide, **always**._

[https://www.zsh.org/](https://www.zsh.org/)
