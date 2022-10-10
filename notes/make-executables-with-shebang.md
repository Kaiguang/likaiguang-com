---
title: 'Make executables with shebang'
date: '2022-10-09'
tags:
  - Linux
  - Node.js
  - shell
---

You can make a JavaScript or TypeScript file executable in the shell, with the shebang `#!`

With this JS file at `~/bin/sayHi.js`:

```javascript
#!node
console.log('Hi there!');
```

You can execute it with:

```shell
chmod 744 ~/bin/sayHi.js
# instead of typing `node ~/bin/sayHi.js`
# you can just
~/bin/sayHi.js
```

And you can do similar things for TS files `~/bin/sayHi.ts`:

```typescript
#!bun run
console.log('Hi there from bun run!');
```

Or shell script `~/bin/sayHi.sh`:

```shell
#!zsh
echo "Hi there from zsh!"
```
