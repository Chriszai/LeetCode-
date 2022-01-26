/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

    var sum = "";
    if (x > 0) {
        while (x >= 1) {
            sum += x % 10
            x = Math.floor(x / 10)
        }
    } else if (x < 0) {
        sum = "-"
        x = x - 2 * x
        while (x >= 1) {
            sum += x % 10
            x = Math.floor(x / 10)
        }
    } else {
        return 0
    }
    if (parseInt(sum) <= Math.pow(-2, 31) || parseInt(sum) >= (Math.pow(2, 31) - 1)) {
        return 0
    }else{
        return parseInt(sum)
    }

};