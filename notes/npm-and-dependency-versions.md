---
title: 'Why does not `npm install` install the latest versions of my dependencies?'
date: '2022-09-17'
tags:
  - Node.js
---

When you initialize a fresh project and `npm install lodash@4.0.0`, you will see `"lodash": "^4.0.0"` in the package.json file, and when you run `npm install` you would expect npm will install the latest lodash@4.17.21 for you, but it will only install lodash@4.0.0 for you.

Then when you run `npm update` it will update the lodash in package-lock.json file to 4.17.21, but you will still have `"lodash": "^4.0.0"` in the package.json.

And if you `rm -rf node_modules` and `npm i` again, you'll get lodash@4.17.21 in package-lock.json and `"lodash": "^4.0.0"` in package.json.

From here, if you commit both package.json and package-json, and pass the project to other people or process to `npm install` they will get the latest lodash@4.17.21.

If you want to have lodash@4.17.21 in both package.json and package-lock.json, you will need to `npm install lodash@latest`.
