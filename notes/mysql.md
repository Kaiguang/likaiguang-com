---
title: 'MySQL'
date: '2021-01-30'
tags:
  - database
  - SQL
---

## Install MySQL on WSL

```shell
sudo apt update
sudo apt install mysql-server

# check if installed
mysql --version

# start the MySQL server
sudo /etc/init.d/mysql start
# or
sudo service mysql start

# run the security script if this is fresh installation
sudo mysql_secure_installation

# access the MySQL shell
sudo mysql
```

## Manage Users

```sql
CREATE USER 'username'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
CREATE USER 'username'@'%' IDENTIFIED BY 'password';

ALTER USER 'username'@'localhost' IDENTIFIED WITH mysql_native_password BY 'newpassword';

GRANT ALL PRIVILEGES ON *.* TO 'newuser'@'localhost';
GRANT ALL PRIVILEGES ON *.* TO 'username'@'%';
GRANT PRIVILEGE ON 'database'.'table' TO 'username'@'localhost';
FLUSH PRIVILEGES;
```
