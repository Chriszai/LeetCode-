/**
 * @param {string} s
 * @return {string}
 */
 var decodeString = function (s) {
    var arr = []
    var arr2 = []
    for (var i = 0; i < s.length; i++) {
        if (s[i] == '[') {
            var time = '';
            arr.push(i)
            var j = i - 1
            while (s[j] >= 0 && s[j] < 10) {
                time = s[j] + time
                --j
            }
            arr2.push(time)
        }
        if (s[i] == ']') {
            var cur = arr.pop()
            var time = arr2.pop()
            var newStr = s.slice(cur + 1, i).repeat(time)
            var num = i - cur - 1 + time.length + 2 - newStr.length
            var clip = s.slice(cur - time.length, i + 1)
            s = s.replace(clip, newStr)
            i = i - num
        }
    }
    return s
};