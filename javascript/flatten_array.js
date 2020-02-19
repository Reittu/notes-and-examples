function flattenArray(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? flattenArray(flat) : flat;
}

flattenArray([1, [2], [3, [[4]]]]);

// Or with ES, simply arr.flat(Infinity);