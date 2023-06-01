/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    let path = [], n = grid.length;
    if(grid[0][0]) return -1;
    path.push(0);
    path.push(0);
    path.push(0);
    grid[0][0] = 1;
    let dx = [-1,-1,-1,0,1,1,1,0];
    let dy = [-1,0,1,1,1,0,-1,-1];
    while(path.length > 0){
        let x = path.shift();
        let y = path.shift();
        let d = path.shift();
        if(x === n-1 && y === n-1) return d+1;
        for(let i = 0 ; i < 8 ; i ++){
            let wx = x + dx[i];
            let wy = y + dy[i];
            if(wx<0||wy<0||wx>=n||wy>=n||grid[wx][wy]) continue ;
            grid[wx][wy] = 1;
            path.push(wx);
            path.push(wy);
            path.push(d+1);
        }
    }
    return -1;

};