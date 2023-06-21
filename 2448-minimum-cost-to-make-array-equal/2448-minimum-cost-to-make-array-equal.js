/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(nums, cost) {
   var getCost = function(x){
    return nums.reduce((total, num, i) => (
      total + Math.abs(num - x) * cost[i]
    ), 0);
  };

  const length = nums.length;
  let min = nums[0];
  let max = nums[0];
  let result = getCost(min);

  for (let i = 1; i < length; i++) {
    const num = nums[i];
    min = Math.min(min, num);
    max = Math.max(max, num);
  }

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    const midCost = getCost(mid);
    result = Math.min(result, midCost);

    if (midCost < getCost(mid + 1)) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return result;
};