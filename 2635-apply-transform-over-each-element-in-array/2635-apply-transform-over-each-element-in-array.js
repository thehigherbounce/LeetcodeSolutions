/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newAry = [];
    for(let i = arr.length - 1;i >= 0;i--){
        newAry.unshift(fn(arr[i], i));
    }
    return newAry;
};