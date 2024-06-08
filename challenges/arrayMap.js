// Function to check if there is a subarray with sum equals to target
function subarraySum(arr, target) {
    let currentSum = 0;
    let start = 0;

    // Iterate through the array
    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        // If currentSum exceeds the target, move the start pointer to the right
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        // If currentSum is equal to the target, return true
        if (currentSum === target) {
            return true;
        }
    }

    // If no subarray found, return false
    return false;
}

// Example usage
let arr = [4, 2, 7, 1, 9, 5];
let target = 14;
console.log(subarraySum(arr, target)); // Output: true
