# SSH Cheat Sheet

## ssh-keygen

Generate a key pair with `rsa` key type (algorithm) and `4096` bits in length. Default location of the generated key pair are `~/.ssh/id_rsa` and `~/.ssh/id_rsa.pub`.

```sh
ssh-keygen -t rsa -b 4096 -C comment@comment
```

## ssh

Access a remote host, using the default private key `~/.ssh/id_rsa` (or other types).

```sh
ssh user@host
```

Or with specified identity file (private key).

```sh
ssh -i /path/to/your/private/key/id_rsa user@host
```

## ssh_config

```title="~/.ssh/config"
Host office-pc
   HostName 123.123.12.3
   User kai
   Port 4519
   IdentityFile ~/.ssh/id_rsa
```

`ssh office-pc` to avoid long typing.

`man ssh_config` for more details.
