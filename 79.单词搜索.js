/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let str = ""
    let w = board.length; l = board[0].length
    var dfs = function (j, i, cur, n, arr) {

        if (cur == word) {
            str = cur
        }
        if (n.length >= word.length) {
            return
        }
        if (j - 1 >= 0 && board[j - 1][i] == word.charAt(n) && !arr.includes((j - 1) + "" + i)) {
            dfs(j - 1, i, cur + word.charAt(n), n + 1, [...arr, ((j - 1) + "" + i)])
        }
        if (j + 1 < w && board[j + 1][i] == word.charAt(n) && !arr.includes((j + 1) + "" + i)) {
            dfs(j + 1, i, cur + word.charAt(n), n + 1, [...arr, ((j + 1) + "" + i)])
        }
        if (i - 1 >= 0 && board[j][i - 1] == word.charAt(n) && !arr.includes(j + "" + (i - 1))) {
            arr.push(j + "" + (i - 1))
            dfs(j, i - 1, cur + word.charAt(n), n + 1, [...arr, (j + "" + (i - 1))])
        }
        if (i + 1 < l && board[j][i + 1] == word.charAt(n) && !arr.includes(j + "" + (i + 1))) {
            dfs(j, i + 1, cur + word.charAt(n), n + 1, [...arr, (j + "" + (i + 1))])
        }
    }
    for (var i = 0; i < board[0].length; i++) {
        for (var j = 0; j < board.length; j++) {
            if (board[j][i] == word.charAt(0)) {
                dfs(j, i, word.charAt(0), 1, [(j + "" + i)])
                if (str == word) {
                    return true
                }
            }
        }
    }
    return false
};//还需要优化