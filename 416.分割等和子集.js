/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canPartition = function (nums) {
    if (nums.length == 1) return false
    var sum = 0
    nums.forEach(ele => {
        sum += ele
    })
    if (sum % 2 == 1) {
        return false
    }
    var target = sum / 2
    const dp = new Array(nums.length).fill(0).map(v => new Array(target + 1, false));
    for (var i = 0; i < nums.length; i++) {
        dp[i][0] = true;
    }
    dp[0][nums[0]] = true;
    for (var i = 1; i < nums.length; i++) {
        const num = nums[i];
        for (let j = 1; j <= target; j++) {
            if (j >= num) {
                dp[i][j] = dp[i - 1][j] | dp[i - 1][j - num];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    return dp[nums.length - 1][target];
};//需要复习