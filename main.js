function rotate(arr, k) {
  const n = arr.length;
  k = k % n; // handle k > n

  return [...arr.slice(-k), ...arr.slice(0, n - k)];
}
const arr = [1, 2, 3, 4, 5];

console.log(rotate(arr, 2)); // [4, 5, 1, 2, 3]