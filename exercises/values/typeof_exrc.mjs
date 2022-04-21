/* npm t exercises/values/typeof_exrc.mjs
Instructions:
- Run this test (it fails).
- Change the second parameter of each assert.equal() so that the test passes
*/
suite('typeof_exrc.mjs');

import * as assert from 'assert/strict';

test('typeof', () => {
  assert.equal(typeof null, 'object');
  assert.equal(typeof undefined, 'undefined');
  
  assert.equal(typeof 123, 'number');
  assert.equal(typeof 'a', 'string');
  assert.equal(typeof "abc", 'string');
  
  assert.equal(typeof {}, 'object');
  assert.equal(typeof function () {}, 'function');
  assert.equal(typeof [], 'object');
});
