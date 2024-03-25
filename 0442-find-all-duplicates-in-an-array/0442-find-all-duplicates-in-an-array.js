/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const duplicates = [];
    
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] !== i + 1) {
            if (nums[i] === nums[nums[i] - 1]) {
                if (!duplicates.includes(nums[i])) {
                    duplicates.push(nums[i]);
                }
                break;
            }
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        }
    }
    
    return duplicates;
};