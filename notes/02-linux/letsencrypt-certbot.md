# Letsencrypt & Certbot

## Install on Linux

```shell
sudo apt install certbot

# or if you need the NGINX plugin
sudo apt install certbot python3-certbot-nginx
```

## Obtain Certs

```shell
# Obtain cert automatically using the HTTP challenge with NGINX plugin
sudo certbot --nginx

# Obtain cert manually using DNS challenge
# https://eff-certbot.readthedocs.io/en/stable/using.html#manual
sudo certbot certonly --manual
```
