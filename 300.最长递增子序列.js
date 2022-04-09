/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function (nums) {
    var arr = new Array(nums.length).fill(1)
    let max = 1;
    for (var i = 1; i < nums.length; i++) {
        var Curmax = 1
        for (var j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                Curmax = Math.max(arr[j]+1, Curmax)
            }
        }
        arr[i] = Curmax
        max = Math.max(arr[i], max)
    }
    console.log(arr)
    return max
};