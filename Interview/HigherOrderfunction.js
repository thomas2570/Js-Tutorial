// what are Higher Order Functions in JavaScript ? can you give me an example of Higher Order Functions in JavaScript ?


// Higher Order Functions are functions that can take other functions as arguments or return functions as their result. They allow for more abstract and flexible programming patterns, enabling developers to create reusable and composable code.

// Example of Higher Order Function in JavaScript:
const number = [1, 2, 3, 4, 5];

// Using the map() method, which is a Higher Order Function
const squaredNumbers = number.map(function(num) {
  return num * num;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]