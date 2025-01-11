/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
    if (s.length < k) return false
    const charData = {}
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (charData[char]) {
            charData[char] = charData[char] + 1;
        }
        else {
            charData[char] = 1;
        }
    }
    console.log(charData)
    let oddCount = 0;
    for (i in charData) {
        if (charData[i] % 2 != 0) {
            oddCount++;
        }
    }
    return oddCount <= k;
};
