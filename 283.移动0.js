/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function (nums) {
    var n = nums.length, left = 0, right = 0;
     while (right < n) {
         if (nums[right] != 0) {
             swap(nums, left, right);
             left++;
         }
         right++;
     }
 }
 
 var swap = function (nums, left, right) {
     var temp = nums[left];
     nums[left] = nums[right];
     nums[right] = temp;
 }