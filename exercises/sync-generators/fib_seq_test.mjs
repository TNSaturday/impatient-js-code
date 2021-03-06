/* npm t exercises/sync-generators/fib_seq_test.mjs
Instructions:
- Implement fibSeqGen() so that it passes the test.
– Use fibSeqArr() as inspiration.
*/
suite('fib_seq_test.mjs');

import * as assert from 'assert/strict';

import {fibSeqGen} from './fib_seq.mjs';

test('fibSeqArr()', () => {
  assert.deepEqual(fibSeqArr(0), [0]);
  assert.deepEqual(fibSeqArr(1), [0, 1]);
  assert.deepEqual(fibSeqArr(2), [0, 1, 1]);
  assert.deepEqual(fibSeqArr(9), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test('fibSeqGen()', () => {
  assert.deepEqual([...fibSeqGen(0)], [0]);
  assert.deepEqual([...fibSeqGen(1)], [0, 1]);
  assert.deepEqual([...fibSeqGen(2)], [0, 1, 1]);
  assert.deepEqual([...fibSeqGen(9)], [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

function fibSeqArr(max) {
  const result = [];
  
  let current = 0;
  let next = 1;
  for (let i = 0; i <= max; i++) {
    result.push(current);
    [current, next] = [next, current + next];
  }
  
  return result;
}
