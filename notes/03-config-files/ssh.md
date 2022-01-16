# SSH Config File

```plain text title="~/.ssh/config"
Host your-pattern
  HostName 111.222.111.222 or ssh.example.com
  User username
  Port 4519
  IdentityFile ~/.ssh/id_rsa
```

With this setting, you no longer need to type `ssh username@111.222.111.222 -p 4519 -i ~/.ssh/id_rsa`, you type the much shorter `ssh your-pattern` instead.

More reading at https://www.ssh.com/academy/ssh/config
