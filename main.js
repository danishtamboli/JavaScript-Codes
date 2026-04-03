function haveSameKeys(obj1, obj2) {
  const keys1 = Object.keys(obj1).sort();
  const keys2 = Object.keys(obj2).sort();

  if (keys1.length !== keys2.length) return false;

  return keys1.every((key, index) => key === keys2[index]);
}

// Example
console.log(haveSameKeys({a:1, b:2}, {b:3, a:4})); // true
console.log(haveSameKeys({a:1, b:2}, {a:1, c:3})); // false