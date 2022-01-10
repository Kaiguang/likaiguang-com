---
title: Shell Command Separators
tags:
   - Shell
---

<!--truncate-->

## The `&&` Separator

```shell
command1 && command2
```

`command2` is executed if, and only if, `command1` returns an exit status of zero (success).

## The `;` Separator

```shell
command1; command2
```

Commands separated by a `;` are executed sequentially; the shell waits for each command to terminate in turn. The return status is the exit status of the last command executed.

`command2` is executed no matter `command1`'s return status.

## The `||` Separator

```shell
command1 || command2
```

`command2` is executed only if `command1` fails.
