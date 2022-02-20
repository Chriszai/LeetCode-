/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    if (nums.length == 1 || nums.length == 0) {
        return true
    }
    const n = nums.length
    let max = 0
    for (var i = 0; i < n - 1; i++) {
        if (max < i){
            continue
        }
            max = Math.max(max, i + nums[i])
        if (max >= n - 1) {
            return true
        }
    }
    return false
};