---
title: iOS Dev Gotchas
date: 2019-11-10
tags:
  - iOS
---

The little problems I encountered while learning iOS development with Swift.

## Constraints break after deleting a cell in table view

I had a custom table view cell with a few horizontal and vertical stacks, the parent stack view was constrained to the table view cell's margin in all directions when I deleted a cell in the simulator, console will display some layout constraint errors. Setting the priority of the bottom constraint solved the problem.

I got the answer from this [Stack Overflow question](https://stackoverflow.com/questions/52803937/constraints-break-when-programmatically-customized-uitableviewcell-is-removed-fr).
