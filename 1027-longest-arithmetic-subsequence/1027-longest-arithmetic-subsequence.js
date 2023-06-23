/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
    const n = nums.length;
    let maxLen = 2;
    let dp = new Array(n).fill().map(() => new Map());
    for(let i = 0;i < n;i++){
        for(let j = i + 1;j < n;j++){
            const diff = nums[j] - nums[i];
            const len = dp[i].has(diff) ? dp[i].get(diff) + 1 : 2;
            dp[j].set(diff, len);
            maxLen = Math.max(maxLen, len);
        }
    }
    return maxLen;
};