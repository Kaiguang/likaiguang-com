---
title: 'Checklist for Production Web App Built in Node'
date: '2019-09-02'
tags:
  - Linux
---

The tech stack for this checklist is Ubuntu, NGINX, Let's Encrypt, React, Node.js.

I use NGINX to serve the front end React app over HTTPS, and also use NGINX to reverse proxy the back end Node.js API app. NGINX is run under root so it can access port 443. Node.js app is run with normal privilege on some large port number like 8000.

HTTPS can be set up very easily using the free service from Let's Encrypt and their Certbot software.

- [ ] NGINX - Install
- [ ] NGINX - Serve front end as static content
- [ ] NGINX - Reverse proxy to locally hosted back end (http://localhost:8000)
- [ ] Let's Encrypt - Get certificates and set up auto-renew
- [ ] React - Set up environment variables to call **HTTPS** back end API
- [ ] Node.js - Set up environment variables for production database

That's all I know now, will need to add more things as I go deeper.
