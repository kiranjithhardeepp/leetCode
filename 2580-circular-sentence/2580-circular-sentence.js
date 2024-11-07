/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
    sentence.toLowerCase();
    const words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];
        const nextWord = words[(i + 1) % words.length]; // Wrap around to the first word
        
        // Check if the last character of the current word matches the first character of the next word
        if (currentWord[currentWord.length - 1] !== nextWord[0]) {
            return false;
        }
    }
    
    return true;
};