export function isObject(x) {
  return !(x === undefined || x === null || typeof x === 'boolean' || typeof x === 'string'
      || typeof x === 'number');

}
