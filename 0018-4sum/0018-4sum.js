/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    return kSum(nums, 0, 4, target);
    function kSum(nums, start, k, target) {
        const result = [];

        if (start + k > nums.length) {
            return result;
        }

        if (k === 2) {
            return twoSum(nums, start, target);
        }

        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i-1]) {
                continue;
            }

            const subsets = kSum(nums, i+1, k-1, target-nums[i]);

            for (const subset of subsets) {
                result.push([nums[i], ...subset]);
            }
        }

        return result;
    }

    function twoSum(nums, start, target) {
        const result = [];
        let low = start;
        let high = nums.length - 1;

        while (low < high) {
            const sum = nums[low] + nums[high];
            if (sum < target || (low > start && nums[low] === nums[low-1])) {
                low++;
            } else if (sum > target || (high < nums.length - 1 && nums[high] === nums[high+1])) {
                high--;
            } else {
                result.push([nums[low], nums[high]]);
                low++;
                high--;
            }
        }

        return result;
    }
    return result;
};