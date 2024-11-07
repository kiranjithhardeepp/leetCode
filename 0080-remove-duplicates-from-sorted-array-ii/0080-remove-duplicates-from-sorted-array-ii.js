/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    if (nums.length <= 2) return nums.length; // No changes needed if length <= 2

    let k = 2; // Start at index 2, as the first two elements are always allowed

    for (let i = 2; i < nums.length; i++) {
        // Check if current element is different from the element at `k - 2`
        if (nums[i] !== nums[k - 2]) {
            nums[k] = nums[i]; // Place the current element at position `k`
            k++; // Increment `k`
        }
    }

    return k; // `k` is the length of the modified array with at most two duplicates
}
