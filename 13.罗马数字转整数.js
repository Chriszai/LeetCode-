/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let myMap = new Map([["M", 1000], ["D", 500], ["C", 100], ["L", 50], ["X", 10], ["V", 5], ["I", 1]]);
    // let value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    // let set = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    let cur = 0;
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) == "C" && (s.charAt(i + 1) == "D" || s.charAt(i + 1) == "M")) {
            cur -= myMap.get(s.charAt(i))
        } else if (s.charAt(i) == "X" && (s.charAt(i + 1) == "L" || s.charAt(i + 1) == "C")) {
            cur -= myMap.get(s.charAt(i))
        } else if (s.charAt(i) == "I" && (s.charAt(i + 1) == "V" || s.charAt(i + 1) == "X")) {
            cur -= myMap.get(s.charAt(i))
        } else { cur += myMap.get(s.charAt(i)) }
        console.log(cur)
    }
    return cur
    //需要优化
};