---
title: How to Check the Temperature of Mac's CPU and GPU
date: 2021-03-08
originalDate: 2020-09-15
tags:
  - macOS
---

**Note**: This only works for macs with Intel CPU. If you have an Apple Silicon, the IOKit framework will probably help.

```shell
# -n limit the number of sample count to 1
# -s only show the smc sampler
$ sudo powermetrics -n 1 -s smc
```
