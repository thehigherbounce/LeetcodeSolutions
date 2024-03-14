/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let totalSum = n * ( n + 1 ) / 2;
    
    for(let x = 1; x <= n; x++){
        let leftSum = x * (x + 1) / 2;
        let rightSum = totalSum - leftSum + x;
        if(leftSum === rightSum){
            return x;
        }
    }
    return -1;
};