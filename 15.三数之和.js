/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function (nums) {
    if (nums.length < 3) {
        return []
    }
    nums.sort(function (a, b) {
        return a - b
    });
    if (nums[i] > 0) {
        return []
    }

    let array = []
    let l;
    let r = nums.length - 1;
    for (var i = 0; i < nums.length - 1; i++) {
        while(i!==0 && nums[i] == nums[i-1]){
            i++
        }
        l = i + 1
        r = nums.length - 1
        while (l < r) {
            if (nums[l] + nums[i] + nums[r] < 0) {
                l += 1
            } else if (nums[l] + nums[i] + nums[r] > 0) {
                r -= 1
            } else {
                array.push([nums[i], nums[l], nums[r]])
                while (nums[l] == nums[l + 1]) {
                    l++
                }
                while (nums[r] == nums[r + 1]) {
                    r++
                }
                l += 1
                r -= 1
            }
        }
    }
    return array
};