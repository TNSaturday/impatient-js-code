/* npm t exercises/regexps/change_quotes_test.mjs
Instructions:
- Implement change_quotes.mjs
– Use String.prototype.replace() with a named capture group
*/
suite('change_quotes_test.mjs');

import * as assert from 'assert/strict';

import {changeQuotes} from './change_quotes.mjs';

test('changeQuotes()', () => {
  assert.deepEqual(changeQuotes('"foo" and "bar" and "baz"'), '“foo” and “bar” and “baz”');
  assert.deepEqual(changeQuotes('nothing is quoted'), 'nothing is quoted');
  assert.deepEqual(changeQuotes(''), '');
  assert.deepEqual(changeQuotes('empty: ""'), 'empty: “”');
});
