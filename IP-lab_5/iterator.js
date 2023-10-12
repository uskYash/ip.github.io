const numbers = [1, 2, 3, 4, 5];

// Define a custom iterator
function SquareIterator(arr) {
  let index = 0;

  // Define the next method for the iterator
  this.next = function () {
    if (index < arr.length) {
      const square = arr[index] ** 2;
      index++;
      return { value: square, done: false };
    } else {
      return { done: true };
    }
  };
}

// Assign the custom iterator to the array
numbers[Symbol.iterator] = function () {
  return new SquareIterator(numbers);
};

// Use a for...of loop to iterate and print squares
for (const square of numbers) {
  console.log(square);
}
