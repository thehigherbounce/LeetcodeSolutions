/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let res = 0, n = grid.length;
    for(let i = 0;i < n;i++){
        for(let j = 0;j < n;j++){
            match = true;
            for(let k = 0;k < n;k++){
                if(grid[i][k] != grid[k][j]){
                    match = false;
                    break;
                }
            }
            if(match) res++;
        }
    }
    return res;
};