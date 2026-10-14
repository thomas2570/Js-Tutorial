
console.log("One");
console.log("Two");


function hello() {
    console.log("Hello, world!");
}
setTimeout(hello, 1000); // This will call the hello function after 1 second (1000 milliseconds)

console.log("three");
console.log("four");

/// explain ("This code demonstrates the use of a callback function with setTimeout. The 'hello' function is defined and passed as a callback to setTimeout, which will execute it after a delay of 1 second. The console logs "One", "Two", "three", and "four" will be printed immediately, while "Hello, world!" will be printed after the delay.")


function sum(a,b){
    console.log(a+b);
    
}

function calculator(a,b, sumCallback){
    sumCallback(a,b);
}
 calculator(1,2, sum);

 // or

 calculator(1,2, (a,b) => {
    console.log(a+b);
 })

 // explain ("This code demonstrates the use of a callback function in a calculator function. The 'sum' function is defined to take two arguments and log their sum. The 'calculator' function takes two numbers and a callback function as parameters, and it calls the callback function with the two numbers. The first call to 'calculator' uses the 'sum' function as the callback, while the second call uses an anonymous arrow function to achieve the same result. Both calls will log the sum of 1 and 2, which is 3.") 

 // nesting callbacks

function getData(dataId){
    setTimeout(() => {
        console.log("data", dataId);
    }, 1000);
}

// 