---
title: VIM Cheat Sheet
date: 2020-04-29
tags:
  - Vim
---

## Commands

- `hjkl` - basic movement
- `x` - delete a character
- `i` - insert text at cursor
- `a` - append text at cursor
- `A` - append text end of line
- `d` - delete
- `c` - change, delete word or line and switch to insert Mode
- `y` - yank, copy
- `%` - find a matching parentheses () [] {}
- `o` - new line BELOW cursor and go into insert mode
- `O` - new line ABOVE cursor and go into insert mode
- `R` - replace mode
- `CTRL-d` page DOWN
- `CTRL-u` page UP
- `CTRL-w` - jump from one window to another
- `:q!` - exit DISCARDING any changes
- `:wq` - save and exit
- `:w` filename - save file to the filename
- `:s/old/new/` - substitute 'new' for 'old', in the line, first occurrence only
- `:#,#s/old/new/g` - substitute 'new' for 'old', between line number #,#
- `:%s/old/new/gc` - substitute 'new for 'old', whole file, with prompt
- `:!` - execute external commands, for example `:!ls` to list directory
- `:r` filename - retrieve and merge filename to cursor location, can also be combined with !ls and other shell commands to read their outputs

## Count

Type a number before a motion to repeat it that many times.

- `5w` - move 5 words
- `d5w` - delete 5 words
- `2dd` - delete 2 lines
- `55G` - move to line number 55

## Motions

- `w` - until the start of the next word, EXCLUDING its first character.
- `e` - to the end of the current word, INCLUDING the last character.
- `$` - to the end of the line, INCLUDING the last character.
- `0` - to the beginning of the line
- `r` - replace a single character
- `dd` - delete a line
- `p` - put deleted/yanked text after the cursor, paste
- `u` - undo last command
- `U` - undo the line
- `CTRL-r` - redo
- `CTRL-g` - show file status and current line location
- `gg` - move to the first line
- `G` - move to the last line

## Search

- `/` - search forward
- `?` - search backward
- `n` - search the same phrase again
- `N` - search the same phrase again in the opposite direction
- `CTRL-o` - older postion
- `CTRL-i` - newer position
- `:set ic / noic` - ignore case / disable
- `:set hls / nohls` - highlight search / disable
- `:nohlsearch` - disable highlight search
- `:set is / nois` - show partial matches / disable
- `:set` - can also be combined like :set ic hls is
- `/search\c` - ignore case for just one search

## Visual

- `v` - visual selection, can be combined with `:w filename` to save selected text to a file, or d to delete selected text

## Startup Script

- Edit the `~/.vimrc` file

