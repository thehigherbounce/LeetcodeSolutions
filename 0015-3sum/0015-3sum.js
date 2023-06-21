/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length - 2; i++){
        if(i > 0 && nums[i] == nums[i - 1]) continue;
        let j = i + 1, k = nums.length - 1;
        while(j < k){
            if(nums[i] + nums[j] + nums[k] === 0){
                result.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while(j < k && nums[j] === nums[j - 1])j++;
                while(j < k && nums[k] === nums[k + 1])k--;
            } else if (nums[i] + nums[j] + nums[k] < 0) {
                j++;
            } else {
                k--;
            }
        }
    }
    return result;
};