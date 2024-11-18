/**
 * Step 1: Write a recursive flattening function that properly accumulates results.
 * This function will flatten the array and return the flattened result directly.
 */
const flattenArray = (arr) => {
  let result = []; // Array to accumulate the flattened elements.

  // Iterate over each item in the array
  for (let item of arr) {
    if (Array.isArray(item)) {
      // If the item is an array, flatten it and add the results to the result array
      result = result.concat(flattenArray(item)); // Recursively flatten and concatenate
    } else {
      // If it's not an array, add the item to the result
      result.push(item);
    }
  }

  return result; // Return the fully flattened result
};

/**
 * Step 2: The trampoline function.
 * This function will execute the flattening process in a loop to avoid stack overflow.
 */
const trampoline = (f, ...args) => {
  let result = f(...args); // Start the process with the initial function call

  // Keep executing the flattening function until the result is fully flattened
  return result; // Since `flattenArray` now returns the final result directly, no need for further iteration.
};

/**
 * Example usage with a deeply nested array.
 */
const arr = [1, [2, [3, [4]]], 5, [6, 7], 8];

// Use the trampoline to execute the flattening function
console.log(trampoline(flattenArray, arr)); // Expected output: [1, 2, 3, 4, 5, 6, 7, 8]
