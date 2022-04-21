/* npm t exercises/values/instanceof_exrc.mjs
Instructions:
- Run this test (it fails).
- Change the second parameters of assert.equal() so that the test passes
*/
suite('instanceof_exrc.mjs');

import * as assert from 'assert/strict';

test('instanceof', () => {
  assert.equal('abc' instanceof String, false);
  assert.equal(null instanceof Object, false);
  assert.equal(undefined instanceof Object, false);
  
  assert.equal([true, false] instanceof Array, true);
  assert.equal([true, false] instanceof Object, true);
  assert.equal({} instanceof Object, true);
});
