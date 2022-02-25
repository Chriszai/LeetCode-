/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let sum = []
    if (nums.length == 0) {
        return [[]]
    }
    var dfs = function (cur, arr) {
        cur.sort((a, b) => a - b);
        sum.push(cur)
        for (var i = 0; i < arr.length; i++) {
            dfs([...cur, arr[i]], [...arr.slice(i + 1)])
        }
        return
    }
    dfs([], nums)
    return sum

};