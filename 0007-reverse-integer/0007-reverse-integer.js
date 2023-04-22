/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x > 2 ** 31 || x < 2 ** 31 * -1) return 0;
    let flag = (x >= 0) ? true : false;
    if(!flag)x *= -1;
    let y = x + '';
    let output = y.replace().split("").reverse().join("") * (flag ? 1 : -1);
    return (output > 2 ** 31 || output < 2 ** 31 * -1) ? 0 : output;
};