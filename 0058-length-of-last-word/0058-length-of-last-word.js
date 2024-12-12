/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    if (s.length === 0) {
        return 0;
    }
    let splitted = s.split(" ")
    const refrence = []
    splitted.forEach((word) => {
        if (word !== "") {
            refrence.push(word)
        }
    })
    const lastWord = refrence[refrence.length - 1];
    return lastWord.length
};