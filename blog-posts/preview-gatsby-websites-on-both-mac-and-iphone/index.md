---
title: Preview Gatsby Websites on Both Mac and iPhone
date: 2020-10-04
tags:
  - Gatsby
---

When developing a website using Gatsby, you can preview and hot reload your website on both Mac and iPhone browsers, using the local network.

```shell
$ gatsby develop -H "0.0.0.0"
```

The Gatsby CLI will provide you an IP address with port number in the below format.

```shell
On Your Network: http://192.168.***.***:8000/
```

Simply paste it into your iPhone browser to view.
