/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1){
        return s;
    }
    let currentRow = 1;
    let headingDown = true;
    let zigZagAry = [];
    for(let i = 0;i < numRows;i++){
        zigZagAry[i] = [];
    }

    for(let i = 0;i < s.length;i++){
        zigZagAry[currentRow - 1].push(s[i]);

        if(headingDown){
            currentRow++;

            if(currentRow > numRows){
                currentRow = numRows - 1;
                headingDown = false;
            }
        } else {
            currentRow--;

            if(currentRow < 1){
                currentRow = 2;
                headingDown = true;
            }
        }
    }
    let totalString = '';
    for(let i = 0;i < numRows;i++){
        totalString += zigZagAry[i].join('');
    }

    return totalString;
};