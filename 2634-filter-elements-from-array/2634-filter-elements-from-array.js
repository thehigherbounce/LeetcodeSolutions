/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let newAry = [];
    for (let i = 0; i < arr.length;i++){
        if(fn(arr[i], i)){
            newAry.push(arr[i]);
        }
    }
    return newAry;
};