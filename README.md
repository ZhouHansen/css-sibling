# css-sibling [![stability][0]][1]
 [![npm version][2]][3] [![downloads][4]][5]
 ![travis build][6]

Add a css sibling class selector to any *first level* class selector.

## usage

```css
/* src */
.a{
  color: red
}
.b, .c{
  color: black
}
.c > .e .f{
  color: green
}
.d.v{
  font-size: 10px
}
```

```js
/* run */
var cssSibling = require('css-sibling')

cssSibling(src, 'sibling', result => {
  console.log(result)
})
```

```css
/* result */
.a.sibling{
  color: red
}
.b.sibling, .c.sibling{
  color: black
}
.c.sibling > .e .f{
  color: green
}
.d.v.sibling{
  font-size: 10px
}
```

## api

### `cssSibling(src, siblingClass, done)`

* `src<string|buffer>` css source

* `siblingClass<string>` sibling class selector name

* `done(newcss)<function>` rewrote callback with the new source

## license
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-stable-green.svg
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/css-sibling.svg?style=flat-square
[3]: https://npmjs.org/package/css-sibling
[4]: http://img.shields.io/npm/dm/css-sibling.svg?style=flat-square
[5]: https://npmjs.org/package/css-sibling
[6]: https://travis-ci.org/ZhouHansen/css-sibling.svg?branch=master
