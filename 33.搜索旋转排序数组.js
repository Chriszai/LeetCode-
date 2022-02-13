/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (nums.length == 0) {
        return -1
    }
    if (nums.length == 1) {
        return nums[0] == target ? 0 : -1
    }
    let lo = 0;
    let hi = nums.length - 1;
    while (lo <= hi) {
        mid = Math.floor((hi + lo) / 2)
        if (nums[mid] == target) {
            return mid
        }//return

        if (nums[mid] >= nums[lo]) {
            if (target >= nums[lo] && target < nums[mid]) {
                hi = mid - 1
            }
            else {
                lo = mid + 1
            }
        } else {
            if (nums[mid] < target && target <= nums[hi]) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
    }
    return -1
};