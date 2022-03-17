/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function (nums) {
    if (nums.length == 1) {
        return nums[0]
    }
    var imax = -10;
    var max = 1
    var min = 1
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            var tmp = max;
            max = min;
            min = tmp;
        }
        max = Math.max(max * nums[i], nums[i])//2 6 -2
        min = Math.min(min * nums[i], nums[i])//2 3 -12

        imax = Math.max(max, imax)
    }
    return imax
};