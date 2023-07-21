/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  const n = nums.length;
  const lengths = new Array(n).fill(1); 
  const counts = new Array(n).fill(1); 
  let maxLength = 1; 
  let result = 0; 

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (lengths[j] + 1 > lengths[i]) {
          lengths[i] = lengths[j] + 1;
          counts[i] = counts[j];
        } else if (lengths[j] + 1 === lengths[i]) {
          counts[i] += counts[j]; 
        }
      }
    }

    maxLength = Math.max(maxLength, lengths[i]);
  }

  for (let i = 0; i < n; i++) {
    if (lengths[i] === maxLength) {
      result += counts[i];
    }
  }

  return result;
};