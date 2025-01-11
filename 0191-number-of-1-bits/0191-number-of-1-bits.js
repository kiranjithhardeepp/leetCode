/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
    let dataSet = []
    let count = 0
    let i = 4
    while (n > 0) {
        console.log(n / 2)
        if (n % 2 != 0) {
            dataSet.push(1)
        }
        else {
            dataSet.push(0)
        }
        n = Math.floor(n / 2);
    }
    dataSet = dataSet.reverse()
    console.log(dataSet)
    for (i in dataSet) {
        if (dataSet[i] === 1)
            count++
    }
    return count;
};