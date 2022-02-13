/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */ 128674
var nextPermutation = function (nums) {
    if (nums.length == 1) {
        return
    }
    for (var i = nums.length - 1; i >= 0; i--) {
        if (nums[i] > nums[i - 1]) {// i4  
            for (var j = nums.length - 1; j >= i; j--) { // j0
                if (nums[j] > nums[i - 1]) {
                    let cur = nums[i - 1]
                    nums[i - 1] = nums[j]
                    nums[j] = cur
                    break
                }
            }
            let cur = nums.slice(i).sort(function (a, b) {
                return a - b;
            })
            nums.splice(i, nums.length - i)
            for (var k = 0; k < cur.length; k++) {
                nums.push(cur[k])
            }
            return
        }
    }
    nums.sort(function (a, b) {
        return a - b;
    })

};