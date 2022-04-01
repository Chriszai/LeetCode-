/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function (nums) {
    var arr = new Array(nums.length)
    arr[0]=1
    for (var i = 1; i < nums.length; i++) {
        arr[i] = arr[i - 1] * nums[i - 1]
    }
    let R = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        // 对于索引 i，左边的乘积为 answer[i]，右边的乘积为 R
        arr[i] = arr[i] * R;
        // R 需要包含右边所有的乘积，所以计算下一个结果时需要将当前值乘到 R 上
        R *= nums[i];
    }
    return arr
};