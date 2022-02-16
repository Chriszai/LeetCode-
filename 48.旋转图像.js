/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const n = matrix.length
    for (var i = 0; i < n; i++) {
        let cur = []
        for (var j = n - 1; j >= 0; j--) {
            cur.push(matrix[j][i])

        }
        matrix.push(cur)
    }
    matrix.splice(0,n)
};