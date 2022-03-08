/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function (prices) {
    if (prices.length == 0) {
        return 0
    }
    var min = prices[0];
    var max = 0;
    for (var i = 1; i < prices.length; i++) {
        max = Math.max(prices[i] - min, max)
        min = Math.min(prices[i], min)
    }
    return max
};