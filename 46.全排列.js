/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let res = []
    var dfs = function (arr, cur) {//123 []  23  1
        // console.log("2", arr)
        if (cur.length == nums.length) {
            res.push(cur)
            return
        }
        for (var i = 0; i < arr.length; i++) {
            dfs([...arr.slice(0, i), ...arr.slice(i + 1)], [...cur, arr[i]])
        }
        return
    }
    dfs(nums, [])
    // console.log(res)
    return res

};