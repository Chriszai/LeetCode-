/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let l = 0, r = height.length - 1;
    var max = 0;
    var cur = 0;
    while (r > l) {
        if (l == 0 && r == height.length - 1) {
            max = Math.min(height[l], height[r]) * (r - l)
        }
        cur = Math.min(height[l], height[r]) * (r - l);
        if (cur > max) {
            max = cur
        }
        if(height[l]>height[r]){
            r--
        }else{
            l++
        }
    }
    return max
};