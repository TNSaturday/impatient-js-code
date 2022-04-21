/* npm t exercises/async-functions/map_async_test.mjs
Instructions:
– Implement map_async.mjs
– Use the Array methods .map() and .filter()
*/
suite('map_async_test.mjs');

import * as assert from 'assert/strict';

import {mapAndRemoveEmptyStringsAsync} from './map_async.mjs';

//---------- Sync

test('mapAndRemoveEmptyStringsSync', () => {
  assert.deepEqual(
    mapAndRemoveEmptyStringsSync(twiceSync, ['a', '', 'b']),
    ['aa', 'bb']
  );
  assert.deepEqual(
    mapAndRemoveEmptyStringsSync(twiceSync, ['', 'a', '', 'b', '', 'c', '']),
    ['aa', 'bb', 'cc']
  );
  assert.deepEqual(
    mapAndRemoveEmptyStringsSync(twiceSync, []),
    []
  );
  assert.deepEqual(
    mapAndRemoveEmptyStringsSync(twiceSync, ['abc']),
    ['abcabc']
  );
});

function twiceSync(str) {
  return str + str;
}

function mapAndRemoveEmptyStringsSync(callback, strArr) {
  return strArr.map(callback).filter(str => str.length > 0);
}

//---------- Async

// Test callback returns a Promise (which async arrow functions always do)! This enables async testing.
test('mapAndRemoveEmptyStringsAsync', async () => {
  assert.deepEqual(
    await mapAndRemoveEmptyStringsAsync(twiceAsync, ['a', '', 'b']),
    ['aa', 'bb']
  );
  assert.deepEqual(
    await mapAndRemoveEmptyStringsAsync(twiceAsync, ['', 'a', '', 'b', '', 'c', '']),
    ['aa', 'bb', 'cc']
  );
  assert.deepEqual(
    await mapAndRemoveEmptyStringsAsync(twiceAsync, []),
    []
  );
  assert.deepEqual(
    await mapAndRemoveEmptyStringsAsync(twiceAsync, ['abc']),
    ['abcabc']
  );
});

function twiceAsync(str) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        resolve(str + str);
      },
      100);
  });
}
