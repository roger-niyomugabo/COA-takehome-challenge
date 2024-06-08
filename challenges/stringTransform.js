// Function to transform the string based on its length
function transformString(input) {
    let length = input.length;

    // If length is divisible by both 3 and 5, reverse and then convert to ASCII
    if (length % 3 === 0 && length % 5 === 0) {
        input = input.split('').reverse().join('');
        return input.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    // If length is divisible by 3, reverse the string
    if (length % 3 === 0) {
        return input.split('').reverse().join('');
    }

    // If length is divisible by 5, replace each character with its ASCII code
    if (length % 5 === 0) {
        return input.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    // If neither, return the string as is
    return input;
}

// Example usage
let input = "Code of africa challenges";
console.log(transformString(input)); // Output: "67 111 100 101 32 111 102 32 97 102 114 105 99 97 32 99 104 97 108 108 101 110 103 101 115"
