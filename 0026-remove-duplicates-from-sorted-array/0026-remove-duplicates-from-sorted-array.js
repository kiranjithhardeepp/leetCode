/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0; // Handle edge case for empty array
    
    let k = 1; // Start with the first element as unique
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) { // Compare with the last unique element
            nums[k] = nums[i]; // Update the next unique position
            k++; // Increment the count of unique elements
        }
    }
    // Optionally, truncate the array to the new length k
    nums.length = k; // This line is optional depending on the problem statement
    
    console.log("output", nums);
    return k; // Return the count of unique elements
};


