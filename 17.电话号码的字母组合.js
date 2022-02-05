/**
 * @param {string} digits
 * @return {string[]}
 */


let map = new Map([
    ['2', 'abc'], ['3', 'def'], ['4', 'ghi'], ['5', 'jkl'], ['6', 'mno'], ['7', 'pqrs'], ['8', 'tuv'], ['9', 'wxyz']
]);
var letterCombinations = function (digits) {
    let arr = [];
    if (digits == "") {
        return []
    }
    arr = findCombination(digits, 0, "", [])
    return arr;
};

var findCombination = function (digits, index, s, arr) {
    if (index == digits.length) {
        arr.push(s)
        console.log(arr)
        return arr;
    }

    var c = digits.charAt(index);
    let letters = map.get(c);
    for (var i = 0; i < letters.length; i++) {
        findCombination(digits, index + 1, s + letters.charAt(i), arr);
    }
    return arr;
}