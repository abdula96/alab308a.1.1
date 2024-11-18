let counter = 0;

function recursiveFunction() {
  counter++; // Increment the counter
  recursiveFunction(); // Call itself recursively
}

try {
  recursiveFunction(); // Start the recursive function
} catch (e) {
  console.log("Stack overflow error caught!");
  console.log("Counter value before overflow: " + counter);
}
