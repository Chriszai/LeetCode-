/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let arr = [];
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) == '(' || s.charAt(i) == '[' || s.charAt(i) == '{') {
            arr.push(s.charAt(i))
        } else if (s.charAt(i) == ')') {
            if (arr.pop() !== '(') {
                return false
            }
        } else if (s.charAt(i) == ']') {
            if (arr.pop() !== '[') {
                return false
            }
        } else if (s.charAt(i) == '}') {
            if (arr.pop() !== '{') {
                return false
            }
        }
    }
    if(arr.length !==0){
        return false
    }
    return true
};