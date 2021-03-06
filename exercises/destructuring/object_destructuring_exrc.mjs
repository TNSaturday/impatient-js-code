/* npm t exercises/destructuring/object_destructuring_exrc.mjs
Instructions:
- Change the code so that it uses destructuring and the tests still pass
*/
suite('object_destructuring_exrc.mjs');

import * as assert from 'assert/strict';

const obj = {
  first: 'Jane',
  last: 'Doe',
};

test('Properties of the object', () => {
  // BEGIN: use destructuring here
  const first = obj.first;
  const last = obj.last;
  // END: use destructuring here
  
  assert.equal(first, 'Jane');
  assert.equal(last, 'Doe');
});

test('Properties of a property descriptor', () => {
  const desc = Object.getOwnPropertyDescriptor(obj, 'first');

  // BEGIN: use destructuring here
  const value = desc.value;
  const writable = desc.writable;
  const enumerable = desc.enumerable;
  const configurable = desc.configurable;
  // END: use destructuring here
  
  assert.equal(value, 'Jane');
  assert.equal(writable, true);
  assert.equal(enumerable, true);
  assert.equal(configurable, true);
});
