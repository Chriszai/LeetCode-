/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDisappearedNumbers = function (nums) {
//     var arr = []
//     for (var i = 0; i < nums.length; i++) {
//         if (!nums.includes(i + 1)) {
//             arr.push(i + 1)
//         }
//     }
//     return arr

// };
var findDisappearedNumbers = function(nums) {
    const n = nums.length;
    for (const num of nums) {
        const x = (num - 1) % n;
        nums[x] += n;
    }
    const ret = [];
    for (const [i, num] of nums.entries()) {
        if (num <= n) {
            ret.push(i + 1);
        }
    }
    return ret;
};
