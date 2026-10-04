// function statement - 
// theory of hoisting - function statements are hoisted to the top of their scope, so they can be called before they are defined in the code.
function a(){
    console.log('a');
}

// function expression - when a function is assigned to a variable, it is called a function expression. Function expressions are not hoisted, so they cannot be called before they are defined in the code.
var b = function(){
    console.log('b');
}
a();
b();

// anonymous function - a function without a name. Anonymous functions are often used as arguments to other functions, or as immediately invoked function expressions (IIFE).
var c = function(){
    console.log('c');
}

// named function expression - a function expression with a name. Named function expressions are useful for debugging, as the name of the function will appear in stack traces.
var d = function d(){
    console.log('d');
}

// parameter and argument - parameters are the names listed in the function definition, while arguments are the values passed to the function when it is called.
var e = function(f, g){
    console.log(f, g);
}
e('f', 'g');

// explaining the difference between function statements and function expressions - function statements are hoisted to the top of their scope, while function expressions are not. This means that function statements can be called before they are defined in the code, while function expressions cannot. Additionally, function statements can be named or anonymous, while function expressions can only be named. (f and g are parameters, 'f' and 'g' are arguments)

// first class function - a function that can be treated like any other value, meaning it can be assigned to a variable, passed as an argument to another function, or returned from another function. In JavaScript, functions are first-class citizens, which means they can be used in these ways.

// Arrow function - a shorthand syntax for writing function expressions. Arrow functions are always anonymous, and they do not have their own 'this' value, which means they inherit 'this' from the surrounding scope. Arrow functions are often used for short, simple functions, or as callbacks in higher-order functions.

var f = () => {
    console.log('f');
}