/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    for (var i = 1; i < nums.length; i++) {
        let j = i - 1
        let tmp = nums[i]
        while (j >= 0 && nums[j] > tmp) {
            nums[j + 1] = nums[j]
            j--
        }
        nums[j+1] = tmp
    }
}