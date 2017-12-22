var test = require('tape')
var cssSibling = require('./')

var input_css = `
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
`

var output_css = ".a.sibling{color:red}.b.sibling,.c.sibling{color:black}.c.sibling>.e .f{color:green}.d.sibling.v{font-size:10px}"

test('main', t => {
  t.plan(1)

  cssSibling(input_css, 'sibling', result => {
    t.equal(result, output_css)
  })
})
