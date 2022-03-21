/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function (nums) {
    var num = 0
    var max = 0;
    var map = new Map()
    for (var i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        } else {
            map.set(nums[i], 1)
        }
    }
    map.forEach(function (val, key) {
        if(val > max){
            max = val
            num = key
        }
    })
    return num
};