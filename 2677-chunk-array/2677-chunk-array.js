/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let newAry = [];
    for (let i = 0;i < arr.length; i+= size){
        newAry.push(arr.slice(i, i + size));
    }
    return newAry;
};
