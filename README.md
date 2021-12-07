### What
Incorrect bundle behavior

### When
iife

### Reproduce
1. 
```sh
pnpm run build
```

2. check for browser console
`esm.html` and `iife.html`

### Expected
ESM context output
```txt
{type: "BinaryExpression", operator: "+", left: {…}, right: {…}}
```

### Unexpected
iife context output
```txt
Uncaught TypeError: Property left of BinaryExpression expected node to be of a type ["Expression"] but instead got "StringLiteral"
```

