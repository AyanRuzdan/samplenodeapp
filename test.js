const add = require('./index')
const assert = require('assert')
assert.strictEqual(add(2, 3));
assert.strictEqual(add(-1, 3));
console.log('All test cases passed')