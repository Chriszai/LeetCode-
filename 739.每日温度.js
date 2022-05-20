/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function (temperatures) {
    // var ans = []
    // for (var i = 0; i < temperatures.length - 1; i++) {
    //     for (var j = i + 1; j < temperatures.length; j++) {
    //         if (temperatures[j] > temperatures[i]) {
    //             ans.push(j - i)
    //             break
    //         } else {
    //             if (j == temperatures.length - 1) ans.push(0)
    //         }
    //     }
    // }
    // ans.push(0)
    // return ans
    var length = temperatures.length;
    var ans = new Array(length);
    ans = ans.fill(0, 0)
    var stack = [];
    for (var i = 0; i < length; i++) {
        var temperature = temperatures[i];
        while (stack.length != 0 && temperature > temperatures[stack[stack.length - 1]]) {
            var prevIndex = stack.pop();
            ans[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }
    return ans;
};