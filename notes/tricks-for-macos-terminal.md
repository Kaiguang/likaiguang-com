---
title: 'Tricks for macOS Terminal'
date: '2019-08-27'
tags:
  - macOS
  - Zsh
---

## 1. history

Type `history` in terminal to display a list of recently used commands.

Then type `!123` or `!` followed by any number to execute the command.

Or type `!!` to execute the last command.

## 2. say

This makes the Mac speak. When I have a command or script running for longer than a few seconds, I want the Terminal to make a sound when done executing. For example:

```shell
npm install; say "process completed."
```

The `;` means running the first command to completion, and then invoke the second command.

## 3. Other Thoughts

I can also make aliases for any of the above commands so that I don't have to type so much.
