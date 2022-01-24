/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function (s) {
    var ans = ""
    var max = 0
    var len = s.length;
    for (var i = 0; i < len; i++)
        for (var j = i + 1; j <= len; j++) {
            var test = s.substring(i, j);
            if (isPalindromic(test) && test.length > max) {
                ans = s.substring(i, j);
                max = Math.max(max, ans.length);
            }
        }
    return ans;
};

function isPalindromic(s) {
    var len = s.length;
    for (var i = 0; i < len / 2; i++) {
        if (s.charAt(i) != s.charAt(len - i - 1)) {
            return false;
        }
    }
    return true;
}