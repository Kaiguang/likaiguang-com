# macOS .zshrc

```shell title="~/.zshrc"
# Show Git Info
autoload -Uz vcs_info
precmd_vcs_info() { vcs_info }
precmd_functions+=( precmd_vcs_info )
setopt prompt_subst
zstyle ':vcs_info:git:*' formats '%F{yellow}(%r:%b)%f'

# Prompt
export PS1='%F{green}%n@%m%f:%F{cyan}%~%f${vcs_info_msg_0_}%# '

# Aliases
alias ll='ls -alFGh'
alias history='history 1'

# Aliases for Git
alias gp='git pull'
alias gs='git status -u'
alias gc='git commit'
alias gb='git branch'
alias gl='git log --remotes --branches --tags --graph --oneline'
```
