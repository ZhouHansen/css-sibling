var csstree = require('css-tree')
var assert = require('assert')

module.exports = (src, sibling, done) => {
  assert.ok(typeof src === 'string' || Buffer.isBuffer(src) , 'css-sibling: src should be type string or buffer')
  assert.equal(typeof sibling, 'string', 'css-sibling: sibling should be type string')
  assert.equal(typeof done, 'function', 'css-sibling: done should be type function')

  var ast = csstree.parse(src)
  var isComing = false

  csstree.walk(ast, node => {
    if (node.type === 'Selector') {
      isComing = true
    } else if (node.type !== 'ClassSelector') {
      isComing = false
    }

    if (isComing && node.type === 'ClassSelector') {
      node.name = node.name + '.' + sibling
      isComing = false
    }
  })

  done(csstree.translate(ast))
}
