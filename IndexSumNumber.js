function sumIndex(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
console.log(sumIndex([2, 4, 7, 2, 1], 4));
console.log(sumIndex([2, 4, 7, 2, 1], 3));
