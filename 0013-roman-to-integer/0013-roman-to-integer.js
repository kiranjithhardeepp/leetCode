/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const current = values[s[i]];
        const next = values[s[i + 1]];

        // Check if the current symbol is less than the next symbol
        if (next && current < next) {
            total -= current; // Subtract current value for cases like IV, IX, etc.
        } else {
            total += current; // Add current value for regular cases
        }
    }

    return total;
};


