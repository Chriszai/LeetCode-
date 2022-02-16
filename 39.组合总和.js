/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    candidates = candidates.sort((a, b) => a - b);
    if (candidates[0] > target) {
        return []
    }
    if (candidates[0] == target) {
        return [[candidates[0]]]
    }
    res = []
    // 349 7
    var dfs = function (cur, path, j) {
        for (var i = j; i < candidates.length; i++) {
            if (cur < 0) {
                return
            } else if (cur > 0) {
                dfs(cur - candidates[i], [...path, candidates[i]], i)// 3 3 0   0 3 3 0  
            } else {
                res.push(path)
                return
            }
        }
        return
    }

    dfs(target, [], 0)
    return res
};