---
title: How to Make JSON Data Pretty in the Shell Output
tags:
   - Shell
---

Sometimes I use `curl` to test an API endpoint, and the JSON data I got back is not formatted. There are two quick ways to format the JSON data in the shell output.

<!--truncate-->

## python

If you have python installed, check with `type python`. You can either pipe the data to the json.tool module:

```shell
curl https://swapi.dev/api/people/1/ | python -m json.tool
```

Or format a file and print it to the output:

```shell
python -m json.tool filename.json
```

## jsome

jsome is an NPM package and can be installed at [its NPM package page](https://www.npmjs.com/package/jsome).
