/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const list = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const valueList = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let result = '';
    while(num !== 0){
        for(let i = 0;i < list.length;i++){
            if(num >= valueList[i]){
                result += list[i];
                num -= valueList[i];
                break;
            }
        }
    }
    return result;
};