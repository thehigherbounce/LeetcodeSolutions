/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const m = s.length;
    const n = p.length;
    const dp = new Array(m + 1).fill(false).map(() => new Array(n + 1).fill(false));
    
    dp[0][0] = true;
    for(let i = 1;i <= n;i++){
        if (p[i - 1] === '*'){
            dp[0][i] = dp[0][i - 2];
        }
    }
    
    for(let i = 1;i <= m;i++){
        for(let j = 1;j <= n;j++){
            const currS = s[i - 1];
            const currP = p[j - 1];
            
            if(currS === currP || currP === '.'){
                dp[i][j] = dp[i - 1][j - 1];
            } else if (currP === '*') {
                const prevP = p[j - 2];
                if(prevP === currS || prevP === '.'){
                    dp[i][j] = dp[i][j - 2] || dp[i - 1][j];
                } else {
                    dp[i][j] = dp[i][j - 2];
                }
            }
        }
    }
    return dp[m][n];
};