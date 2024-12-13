/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = prices[0];
    let totalProfit = 0;
    const isSortedDescending = (arr) => {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > arr[i - 1]) {
                return false;
            }
        }
        return true;
    }
    const isSortedAscending = (arr) => {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                return false;
            }
        }
        return true;
    }
    if (isSortedDescending(prices)) { //base case
        return 0;
    }
    else if (isSortedAscending(prices)) {
        return prices[prices.length - 1] - prices[0]
    }
    else {
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] > prices[i - 1]) {
                totalProfit += prices[i] - prices[i - 1];
            }
        }
        return totalProfit;
    }
}