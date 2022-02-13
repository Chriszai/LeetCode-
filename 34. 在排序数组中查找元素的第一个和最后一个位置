/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    if (nums.length == 0) {
        return [-1, -1]
    }
    let lo = 0;
    let hi = nums.length - 1
    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2)
        if (nums[mid] < target) {
            lo = mid + 1
        } else {
            hi = mid - 1
        }
    }
    let left = lo;
    lo = 0;
    hi = nums.length - 1
    while (lo <= hi) {
        let mid = Math.round((lo + hi) / 2)
        if (nums[mid] > target) {
            hi = mid - 1
        } else {
            lo = mid + 1
        }
    }
    let right = hi
    if (right >= left) {
        return [left, right]

    } else {
        return [-1, -1]
    }
}