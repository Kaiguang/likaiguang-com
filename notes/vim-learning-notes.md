# Vim Learning Notes

Date: 2020-12-09

Today I decided to learn Vim from the official help files. So I started to follow the [official help files](https://vimhelp.org/).

There are two parts of the documentation, the **user manual** can be read like a book from start to finish, the **reference manual** is more technical and has precise descriptions of how Vim works.

I started off by reading the user manual which is very easy to understand. A lot of important concepts are well explained there, if you are a beginner definitely start from the [user manual](https://vimhelp.org/usr_toc.txt.html) to get a better understanding of Vim.

By the time I got to chapter 4 user_04.txt, I started liking to use Vim to type my text, and using the [quick reference](https://vimhelp.org/quickref.txt.html) started to become helpful.

Below is my learning notes typed in Vim, as a practice.

## Move around the cursor

```vim
" move left down up right
  k
h  l
 j
```

`w` move to the start of the next _word_

`W` move to the start of the next _WORD_ (white-space separated)

`b` move to the start of the previous word

`B` move to the start of the previous WORD (white-space separated)

`e` move to the _end_ of the next word

`E` move to the _end_ of the next _WORD_ (white-space separated)

`ge` move to the _end_ of the previous word

`gE` move to the _end_ of the previous _WORD_ (white-space separated)

`0` `HOME` move to the start of the line

`^` move to the first non-blank character of the line

`$` `END` move to the end of the line

`f{ch}` _find_ forward a single character within the line

`F{ch}` _find_ backward a single character within the line

`t{ch}` find forward a single character within the line, stop _to_ the position 1 character ahead

`T{ch}` find backward a single character within the line, stop _to_ the position 1 character ahead

`;` repeat the last `f` `F` `t` `T` command

`,` repeat the last `f` `F` `t` `T` command in the opposite direction

`%` move to the matching parenthesis, bracket, or brace

`gg` move to the beginning of the file

`G` move to the end of the file

`{number}G` move to the line number

`{number}%` move to the percentage of the file

`H` `M` `L` move to the _home_, _middle_, or _last_ line of the current visible screen

` `` ` go back to the position before the jump. However, the `j` `k` are not considered to be a jump even preceded with a number.

`CTRL-O` `CTRL-I` jump to the _older_, or newer position

`:jumps` show a list of positions jumped

## Marks

`m{ch}` `` `{ch} `` place a mark, or go to a mark by the character

`:marks` show a list of marks

Look at the user manual for more [marks](https://vimhelp.org/usr_03.txt.html#03.10) info.

## Scroll

`CTRL-D` `CTRL-U` scroll _down_, or _up_ N lines, default half a screen

`CTRL-E` `CTRL-Y` scroll down, or up N lines, default 1 line

`CTRL-F` `CTRL-B` scroll down _(forward)_, or up _(backward)_ N screens, default 1 screen

`CTRL-B` scroll up _(backward)_ N screen, default 1 screen

`zt` `zz` `zb` scroll so that the current cursor position is at the _top_, middle, or _bottom_

## Search

`/{string}` `?{string}` search forward, or backward for the string

`n` `N` move to the next match, or the opposite direction

`*` `#` search the _whole_ word under the cursor in the forward, or backward direction

`g*` `g#` search the _partial_ word under the cursor in the forward, or backward direction

`\<` `\>` special marker for the beginning, or the end of a word

`:set ignorecase` `:set noignorecase` turn on, or off the case insensitivity for search

To access the search history, type `/` and then use the `UP` or `DOWN` arrow keys. Type `/{string}` and then use the `UP` or `DOWN` arrow keys for search history with auto-completion. The arrow keys also works with `:` commands.

`:nohlsearch` `:noh` turn off the search highlight for the current search only, future searches will turn the highlight back on, including the `n` `N`.

`:set incsearch` enable incremental search, it will highlight the matches as you type the search pattern

The search also works with regular expressions. I won't leave too much notes here, take a look at the user manual for [simple search patterns](https://vimhelp.org/usr_03.txt.html#03.9) as a starting point.

## File status

`CTRL-G` show the current file name, file path, and cursor position

## Insert text

`i` _insert_ **before** the character under the cursor

`a` _append_ **after** the character under the cursor

`A` start insert mode after moving the cursor to the end of the line

`I` start insert mode after moving the cursor to the first non-blank in the line

`o` start a new line below the cursor and go into insert mode

## Delete

`x` `dl` delete a character under the cursor

`X` `dh` delete a character left of the cursor

`dw` `de` delete a word to the beginning, or the end of last word

`df{ch}` delete to a found character

`dd` delete a line

`D` `d$` delete from the cursor to the end of the line

`J` delete a line break (_join_ the current line with the line below)

## Change

`cw` `ce` do the same thing, delete a word and put you in insert mode

`r` and type a character to replace, does not go to insert mode

`s` `cl` change one character and go to insert mode

`C` `c$` change to end of the line

`S` `cc` change one line

`.` repeat last change, except for `u`, `CTRL-R`, and commands started with a `:`

`~` change case of the character under the cursor

## Visual mode

`v` to go to visual mode, then use operators

`V` visual mode for selecting whole lines

`CTRL-V` visual mode for selecting rectangular blocks

`o` when in visual mode, change the cursor to the _other_ end

## Move text

`p` `P` put the text after, or before the cursor, if it's a line, then put it under, or above the cursor

## Copy text

`y` _yank_ is copy

`yy` `Y` yank a whole line

`"*yy` copy the selected text in visual mode to the system's clipboard to use in other programs, or the line in normal mode

`"*p` put (paste) from the system's clipboard

## Text objects

`daw` delete a word, if the cursor is not in the very first letter of the word, because `dw` only deletes from the cursor

`aw` is a text object for _a word_

`as` _a sentence_

`is` _inner sentence_

## Replace mode

`R` go to replace mode

## Count

An interesting note about where to put the COUNT

> The commands "3dw" and "d3w" delete three words. If you want to get really
> picky about things, the first command, "3dw", deletes one word three times;
> the command "d3w" deletes three words once. This is a difference without a
> distinction. You can actually put in two counts, however. For example,
> "3d2w" deletes two words, repeated three times, for a total of six words.

## Undo and redo

`u` _undo_

`U` _undo_ line

`CTRL-R` _redo_

## Repeat

You can precede many commands with a number, to repeat that number of time. For example, `9k` moves up 9 lines.

## Mapping

A mapping enables you to bind a set of Vim commands to a single key.

[User Manual 05.4 Simple mappings ](https://vimhelp.org/usr_05.txt.html#05.4)

## Tag

For Vim, tag is a hyperlink.

`CTRL-]` jump to tag

`CTRL-T` pop tag, go back to the preceding position

## Indent

`==` indent the current line

`=a{` indent the current `{}` block

`gg=G` indent the whole file, `gg` goes to the first line, `=` indent till the `G` last line

## Quit

`ZZ` write the file and quit

`:q` _quit_

`:q!` _quit_ without writing the file (without saving)

`:e!` reload the file, discard all changes, continue _editing_

## Help

`:help` generic help

`:help {subject}` get help on a command or a subject

`:help CTRL-{ch}` type literally CTRL for control commands

## Setting

For the Vim startup script file `~/.vimrc`, I append the following for the features I want.

```vim
" enable syntax highlighting
syntax enable
" enable line number display
set number
" ignore case for search
set ignorecase
" enable search highlight while typing the search pattern
set incsearch
" display the current cursor position in the lower right corner of the Vim window
set ruler
" display an incomplete command in the lower right corner of the Vim window, left of the ruler
set showcmd
" set scrolloff to keep the cursor in the middle of the screen
set so=100
" set the automatic indentation spaces for C or C style text
set cindent shiftwidth=2
```
