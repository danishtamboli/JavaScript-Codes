function sumNested(arr) {
  let sum = 0;

  for (let item of arr) {
    if (Array.isArray(item)) {
      sum += sumNested(item);
    } else {
      sum += item;
    }
  }

  return sum;
}
const arr = [1, [2, 3], [4, [5]]];

console.log(sumNested(arr)); 