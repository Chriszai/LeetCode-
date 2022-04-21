/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function (nums, k) {
    const map1 = new Map();
    var arr = []
    var max = 0;
    for (var i = 0; i < nums.length; i++) {
        if (map1.has(nums[i])) {
            map1.set(nums[i], map1.get(nums[i]) + 1)
        } else {
            map1.set(nums[i], 1)
        }
        max = Math.max(max, map1.get(nums[i]))
    }

    while (k > 0) {
        map1.forEach((val, key) => {
            if (val == max) {
                arr.push(key)
                k = k - 1
            }
        })
        max = max - 1
    }
    return arr
};