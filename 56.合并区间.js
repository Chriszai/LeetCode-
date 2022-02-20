/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length == 0 || intervals.length == 1) {
        return intervals
    }
    intervals.sort((a, b) => a[0] - b[0]);
    let arr = [];
    for (var i = 0; i < intervals.length; i++) {
        let l = intervals[i][0], r = intervals[i][1]
        if (arr.length == 0 || arr[arr.length - 1][1] < l) {
            arr.push([l, r])
        }
        else {
            arr[arr.length - 1][1] = Math.max(arr[arr.length - 1][1], r);
        }
    }
    return arr
};