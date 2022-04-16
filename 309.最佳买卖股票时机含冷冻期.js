/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function (prices) {
    if (prices.length == 0) {
        return 0;
    }
    let n = prices.length;
    // f[i][0]: 手上持有股票的最大收益
    // f[i][1]: 手上不持有股票，并且处于冷冻期中的累计最大收益
    // f[i][2]: 手上不持有股票，并且不在冷冻期中的累计最大收益
    var f = new Array(n); 
    for (var i = 0; i < f.length; i++) {
        f[i] = new Array(3); 
    }
    f[0][0] = -1 * prices[0];
    f[0][1] = -1 * prices[0];
    f[0][2] = 0;
    for (var i = 1; i < n; ++i) {
        console.log(f[0][2])
        f[i][0] = Math.max(f[i - 1][0], f[i - 1][2] - prices[i]);
        f[i][1] = f[i - 1][0] + prices[i];
        f[i][2] = Math.max(f[i - 1][1], f[i - 1][2]);
    }
    return Math.max(f[n - 1][1], f[n - 1][2]);
};