/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    console.log("nums", nums)
    let x = 0;
    let i = 0;
    for (let x = nums.length - 1; x >= 0; x--) {
        if (nums[x] === val) {
            nums.splice(x, 1);
        }
    }
    console.log("nums", nums)
};