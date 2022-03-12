/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function (nums) {
    var mySet = new Set();
    for (var i = 0; i < nums.length; i++) {
        if (mySet.has(nums[i])) {
            mySet.delete(nums[i])
        } else {
            mySet.add(nums[i])
        }
    }

    const iterator1 = mySet[Symbol.iterator]();
    return iterator1.next().value
};