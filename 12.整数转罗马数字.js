/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let set = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    let cur = "";
    for (var i = 0; i < 13; i++) {
        cur += set[i].repeat(num / value[i])
        num = num % value[i]
        if (num)
            console.log(num)
    }
    return cur
};//需要优化