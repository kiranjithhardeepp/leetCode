/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    // Create a frequency map for characters in `s`
    const charCount = {};

    // Populate the frequency map
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Check characters in `t` against the frequency map
    for (let char of t) {
        if (!charCount[char]) {
            return false; // If char is missing or count is 0
        }
        charCount[char]--; // Decrement the count
    }

    // If we pass through all characters, it's an anagram
    return true;
}
