/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function (matrix, target) {
    for (var i = 0; i < Math.min(matrix.length, matrix[0].length); i++) {
        if (target >= matrix[i][i] && target <= matrix[i][matrix[0].length - 1]) {
            for (var j = i; j < matrix[0].length; j++) {
                if (target == matrix[i][j]) return true
            }
        }
        if (target >= matrix[i][i] && target <= matrix[matrix.length - 1][i]) {
            for (var j = i; j < matrix.length; j++) {
                if (target == matrix[j][i]) return true
            }
        }
    }
    return false
};
