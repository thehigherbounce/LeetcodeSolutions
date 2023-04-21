/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let idx = [];
    let i = 0;
    while(s[i] && s.length > 1){
        for(let j = i + 1;j <= s.length;j++)
            if(s.slice(i, j).indexOf(s[j]) > -1 || !s[j]){
                idx.push(s.slice(i, j).length);
                break;
            }
        i++;
    }
    if(s.length === 1)idx.push(1);
    return idx.length ? Math.max(...idx): 0;
};