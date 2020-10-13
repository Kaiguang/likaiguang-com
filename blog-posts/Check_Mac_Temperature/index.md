---
title: How to Check the Temperature of Mac's CPU and GPU
date: 2020-09-15
tags:
  - macOS
---

```shell
# -n limit the number of sample count to 1
# -s only show the smc sampler
$ sudo powermetrics -n 1 -s smc
```
