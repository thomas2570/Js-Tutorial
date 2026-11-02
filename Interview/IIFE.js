//  wht is IIFE (Immediately Invoked Function Expression) in JavaScript?

// An IIFE (Immediately Invoked Function Expression) in JavaScript is a function that is defined and executed immediately after its creation. It is a design pattern that allows you to create a new scope and avoid polluting the global namespace.

// The syntax for an IIFE typically involves wrapping the function definition in parentheses and then invoking it immediately with another set of parentheses. Here's an example:

// regular function expression
function greet(){
    logger.log("Hello, World!");
}

greet(); // Output: Hello, World!

// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("Hello, World!");
})(); // Output: Hello, World!