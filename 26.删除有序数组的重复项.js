/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    const n = nums.length;// 112
    if (n === 0) {
        return 0;
    }
    let fast = 1, slow = 1;
    while (fast < n) {
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast];//n1 2
            ++slow;//2
        }
        ++fast;// 3
    }
    return slow;
};