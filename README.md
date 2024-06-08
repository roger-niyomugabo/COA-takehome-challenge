# COA-takehome-challenge
# Interactive Photo Gallery and Coding Challenges

## Overview

This project includes two main parts:
1. **Interactive Photo Gallery**: An implementation based on provided Figma designs, ensuring responsive design, hover interactions, and cross-browser compatibility.
2. **Coding Challenges**: Solutions to two coding problems focusing on array manipulation and string transformation.

## Table of Contents

- [Overview](#overview)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Challenges](#challenges)
  - [Array Manipulation](#array-manipulation)
  - [String Transformation](#string-transformation)
- [File Structure](#file-structure)
- [Approach and Solution](#approach-and-solution)
  - [Array Manipulation](#array-manipulation-1)
  - [String Transformation](#string-transformation-1)

## Setup Instructions

### Prerequisites

- Git
- A code editor or IDE (e.g., Visual Studio Code)
- A modern web browser (e.g., Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd <repository-name>
2. **Open the Project in Your Code Editor:**

   ```bash
   code .
### Running the Project
1. Open the `index.html` file in your browser to view the interactive photo gallery.
2. Navigate to `challenges` folder and run any of the programs from the terminal

   ```bash
   cd challenges
   node stringTransform.js OR node arrayMap.js
## Challenges
### Array Manipulation
- File: `Challenges/arrayMap.js`
- Problem Statement:

    Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return true if such a subarray exists, otherwise return false.
- Example:

        let arr = [4, 2, 7, 1, 9, 5];
        let target = 14;
        console.log(subarraySum(arr, target)); // Output: true

### String Transformation
- File: `Challenges/stringTransform.js`
- Problem Statement:

    Given a string, transform it based on the following rules:
    - If the length of the string is divisible by 3, reverse the entire string.
    - If the length of the string is divisible by 5, replace each character with its ASCII code.
    - If the length of the string is divisible by both 3 and 5, perform both operations in the order specified above.

- Example:

        let input = "Code of africa challenges";
        console.log(transformString(input)); // Output: "67 111 100 101 32 111 102 32 97 102 114 105 99 97 32 99 104 97 108 108 101 110 103 101 115"

## File Structure
    .
    ├── Challenges
    │   ├── arrayMap.js
    │   └── stringTransform.js
    ├── index.html
    ├── css
    │   └── styles.css
    ├── js
    │   └── script.js
    ├── assets
    │   └── images
    └── README.md

## Approach and Solution
### Array Manipulation
**Approach:**
1. Utilize a sliding window approach to keep track of the current subarray sum.
2. Adjust the window when the current sum exceeds the target.
3. Check if the current sum matches the target during each iteration.

### String Transformation

**Approach:**
1. Check if the length of the string is divisible by both 3 and 5, first reverse the string and then convert each character to its ASCII code.
2. Apply the respective transformations based on the divisibility conditions.
3. If the length is divisible by 5 only, convert each character to its ASCII code.
4. If none of the above conditions are met, return the string as it is.
