/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if (n === 0) {
        return arr;
    }
    let flattenArray = []
    const flatdata = (arr, n) => {
        for (let i = 0; i < arr.length; i++) {
            if (n > 0 && Array.isArray(arr[i])) {
                flatdata(arr[i], n - 1);
            }
            else {
                flattenArray.push(arr[i])
            }
        }
    }
    flatdata(arr, n);
    return flattenArray;
}