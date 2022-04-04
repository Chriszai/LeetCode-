/**
 * @param {number[]} nums
 * @return {number}
 */
// var findDuplicate = function (nums) {
//     var set = new Set()
//     for (var i = 0; i < nums.length; i++) {
//         if(set.has(nums[i])){
//             return nums[i]
//         }else{
//             set.add(nums[i])
//         }
//     }
// };
var findDuplicate = function(nums) {
    const n = nums.length;
    let l = 1, r = n - 1, ans = -1;
    while (l <= r) {
        let mid = (l + r) >> 1;
        let cnt = 0;
        for (let i = 0; i < n; ++i) {
            cnt += nums[i] <= mid;
        }
        if (cnt <= mid) {
            l = mid + 1;
        } else {
            r = mid - 1;
            ans = mid;
        }
    }
    return ans;
};
