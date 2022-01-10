---
title: How to Get Your Local IP Address
tags:
   - macOS
   - Shell
---

Often times I have a development server running on my Mac serving web apps, and I want to see them on my actual local devices (iPad, cellphones, etc.) in the same network.

There are many ways to check the Mac's local IP address, so that I can type in the other devices and access the URL such as `http://192.168.***.***:3000`.

<!--truncate-->

## Option + click the Wi-Fi status button

More information will show in the menu and I can find the _IP Address_.

## Type commands in the Terminal

```shell
ipconfig getifaddr en0
```

`en0` is the interface-name, in a list which I can find use the following command to show interface configuration.

```shell
ifconfig
```

I haven't figured out the nuances of different interface-names displayed using this command.
