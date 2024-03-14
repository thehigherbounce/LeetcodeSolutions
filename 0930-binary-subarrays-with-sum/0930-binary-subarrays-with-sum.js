/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let count = 0;
    let sum = 0;
    let map = new Map();
    map.set(0, 1);
    
    for(let num  of nums){
        sum += num;
        if(map.has(sum - goal)){
            count += map.get(sum - goal);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
};