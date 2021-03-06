import * as assert from 'assert/strict';

test('truthiness', () => {
  assert.equal(Boolean(null), false);
  assert.equal(Boolean(undefined), false);

  assert.equal(Boolean(''), false);
  assert.equal(Boolean('abc'), true);
  assert.equal(Boolean(0), false);
  assert.equal(Boolean(123), true);
  
  assert.equal(Boolean({}), true);
  assert.equal(Boolean([]), true);
});
