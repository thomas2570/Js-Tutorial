const numbers = [1,2,3,4,5];
const doubleNumbers = numbers.map(num => num * 2);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

console.log(doubleNumbers); // Output: [2, 4, 6, 8, 10]

// MAP method is used to create a new array by applying a function to each element of the original array. 
// In this case, we are doubling each number in the `numbers` array and storing the result in `doubleNumbers`. The original `numbers` array remains unchanged.