/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let y = x.toString();
    if (y.length <= 1) {
        return true
    }
    if (y.charAt(0) !== y.charAt(y.length - 1)) {
        return false
    }
    let sum = "";
    for (let i = y.length - 2; i > 0; i--) {
        sum += y.charAt(i)
    }
    sum = y.charAt(0) + sum + y.charAt(y.length - 1)
    if (parseInt(sum) == y) {
        return true
    }
    return false
};