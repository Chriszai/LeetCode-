/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function (s, numRows) {
    if (numRows == 1) return s;

    var ret;
    var n = s.length;
    var cycleLen = 2 * numRows - 2;

    for (var i = 0; i < numRows; i++) {
        for (var j = 0; j + i < n; j += cycleLen) {
            ret += s[j + i];
            if (i != 0 && i != numRows - 1 && j + cycleLen - i < n)
                ret += s[j + cycleLen - i];
        }
    }
    if (ret.length > s.length) {
        ret = ret.substring(9)
    }
    return ret;

};