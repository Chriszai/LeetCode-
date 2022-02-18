/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let pre = 0, max = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        max = Math.max(max, pre);
    });
    return max;
};
