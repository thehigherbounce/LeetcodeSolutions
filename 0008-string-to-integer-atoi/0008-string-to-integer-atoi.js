/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let temp = '';
    let ans = '';
    let min = false;
    let plu = false;
    for(let i = 0;i < s.length;i++){
        temp = parseInt(s[i]);
        if(isNaN(temp)){
            if(s[i] == " " && plu == true)break
            if(s[i] == " " && min == true)break
            if(s[i] == " " && ans.length !== 0)break
            if(s[i] == "+" && ans.length !== 0)break
            if(s[i] == "-" && ans.length !== 0)break
            if(s[i] == " ")continue
            if(s[i] == "+" && plu == true)break
            if(s[i] == "-" && min == true)break
            if(s[i] == "+"){
                plu = true;
                continue;
            }
            else if(ans.length == 0 && s[i] == "-") min = true;
            else break
        }else{
            ans = ans + s[i]
        }
    }
    if(ans.length === 0) return 0;
    if(plu == true && min == true) return 0;
    ans = parseInt(ans);
    if(min == true) ans  = -1 * ans
    if(ans < -(2**31))return (-1*(2**31))
    if(ans > 2**31 - 1) return ((2**31) - 1)
    return ans
};