---
title: How to Check the Temperature of Mac's CPU and GPU
tags:
   - macOS
---

**Note**: This only works for macs with Intel CPU. If you have an Apple Silicon, the IOKit framework will probably help.

<!--truncate-->

```shell
# -n limit the number of sample count to 1
# -s only show the smc sampler
sudo powermetrics -n 1 -s smc
```
