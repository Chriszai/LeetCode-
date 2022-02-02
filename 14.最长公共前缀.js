/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function (strs) {
    let cur = ""
    let sameVal = ""
    for (var i = 0; i < strs[0].length; i++) {
        cur = strs[0].charAt(i)
        for (var j = 1; j < strs.length; j++) {
            if (strs[j].charAt(i)) {
                if (cur !== strs[j].charAt(i)) {
                    return sameVal
                }
            } else {
                return sameVal
            }
        }
        sameVal += cur
    }
    return sameVal
};