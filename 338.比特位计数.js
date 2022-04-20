/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function (n) {
    if (n == 0) return [0]
    var arr = new Array(n + 1)
    arr[0] = 0
    for (var i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            arr[i] = arr[i/2]
        }else{
            arr[i] = arr[i-1]+1
        }
    }
    return arr
};