/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let w = grid[0].length, s = grid.length
    let arr = []
    for (var i = 0; i < s; i++) {
        arr.push([])
    }
    arr[0][0] = grid[0][0]
    for (var i = 0; i < w - 1; i++) {
        arr[0][i + 1] = arr[0][i] + grid[0][i + 1]
    }
    for (var i = 0; i < s - 1; i++) {
        arr[i + 1][0] = arr[i][0] + grid[i + 1][0]
    }

    for (var i = 1; i < s; i++) {
        for (var j = 1; j < w; j++) {
            arr[i][j] = Math.min(arr[i - 1][j], arr[i][j - 1]) + grid[i][j]
        }
    }
    return arr[s - 1][w - 1]
};