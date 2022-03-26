/**
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalSquare = function (matrix) {
    let l = matrix[0].length, w = matrix.length
    var max = 0;
    if (matrix[0].includes('1')) max = 1
    for (var i = 0; i < w; i++) {
        if (matrix[i][0] == '1') max = 1
    }
    for (var i = 1; i < l; i++) {
        for (var j = 1; j < w; j++) {
            if (matrix[j][i] == '1') {
                if(i==0 || j==0){
                    matrix[j][i]=1
                }
                matrix[j][i] = Math.min(Math.min(matrix[j - 1][i], matrix[j][i - 1]), matrix[j - 1][i - 1]) + 1
                max = Math.max(matrix[j][i], max)
            }
        }
    }
    return max * max
};