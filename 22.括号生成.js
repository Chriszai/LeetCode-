/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let arr = [];
    if (n == 1) {
        return ["()"]
    }
    dfs("", n, n, arr);
    return arr
};
var dfs = function (curStr, left, right, arr) {
    if (left == 0 && right == 0) {
        arr.push(curStr)
        return
    }
    if (left > right) {
        return
    }
    if (left > 0) {
        dfs(curStr + "(", left-1, right, arr);     
    }
    if (right > 0) {
        dfs(curStr + ")", left, right - 1, arr);
    }
}