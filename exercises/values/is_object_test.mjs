/* npm t exercises/values/is_object_test.mjs
Instructions:
- Run the test (fails).
- Change is_object.mjs so that the test passes.
*/
suite('is_object_test.mjs');

import * as assert from 'assert/strict';

import {isObject} from './is_object.mjs';

test('isObject undefined', () => {
  assert.equal(isObject(undefined), false);
});

test('isObject null', () => {
  assert.equal(isObject(null), false);

});

test('isObject boolean', () => {
  assert.equal(isObject(true), false);
});

test('isObject string', () => {
  assert.equal(isObject(123), false);
});

test('isObject function', () => {
  assert.equal(isObject(function () {}), true);
});

test('isObject object', () => {
  assert.equal(isObject({}), true);
});

test('isObject array', () => {
  assert.equal(isObject([]), true);
});