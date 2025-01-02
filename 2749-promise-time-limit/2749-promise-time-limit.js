/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
    return async function (...args) {
        const ifResolved = fn(...args);
        const ifNotResolved = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Time Limit Exceeded");
            },t)
        });
        return Promise.race([ifResolved, ifNotResolved])

    }
};

