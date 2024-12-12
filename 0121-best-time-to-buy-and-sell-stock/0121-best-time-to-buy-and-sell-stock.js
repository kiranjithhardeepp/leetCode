/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length === 0) return 0;

    let minPrice = Infinity; // Initialize to a very high number
    let maxProfit = 0; // Initialize the maximum profit

    prices.forEach(price => {
        // Update the minimum price encountered so far
        if (price < minPrice) {
            minPrice = price;
        }
        // Calculate profit and update maximum profit
        else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    });

    return maxProfit;
};
