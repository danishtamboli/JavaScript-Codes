function findMode(arr) {
  const freq = {};
  let maxCount = 0;
  let mode;

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;

    if (freq[num] > maxCount) {
      maxCount = freq[num];
      mode = num;
    }
  }

  return mode;
}
console.log(findMode([1, 2, 2, 3, 3, 3, 4]));
