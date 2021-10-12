---
title: My SSH Cheat Sheet
date: 2021-10-12
tags:
  - SSH
  - Shell
---

Here are some of my most used SSH commands.

Generate a key pair with `rsa` key type (algorithm) and `4096` bits in length. Default location of the generated key pair are `~/.ssh/id_rsa` and `~/.ssh/id_rsa.pub`.

```sh
ssh-keygen -t rsa -b 4096
```

Access a remote host, using the default private key `~/.ssh/id_rsa` (or other types).

```sh
ssh user@host
```

Or with specified identity file (private key).

```sh
ssh -i /path/to/your/private/key/id_rsa user@host
```
