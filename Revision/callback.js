
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

 // sum is a callback function because of sum is written in calculator function.

 // or

 calculator(1,2, (a,b) => {
    console.log(a+b);
 })

 // explain ("This code demonstrates the use of a callback function in a calculator function. The 'sum' function is defined to take two arguments and log their sum. The 'calculator' function takes two numbers and a callback function as parameters, and it calls the callback function with the two numbers. The first call to 'calculator' uses the 'sum' function as the callback, while the second call uses an anonymous arrow function to achieve the same result. Both calls will log the sum of 1 and 2, which is 3.") 

 // nesting callbacks


let age = 19;
if(age >= 18){
    if(age >= 60){
        console.log("You are a senior citizen");
    }else{
        console.log("You are an adult");
    }
} else{
        console.log("You are a minor");
}

// nasted callbacks can lead to "callback hell" where the code becomes difficult to read and maintain. In this example, we have a function `getData` that simulates fetching data with a delay using `setTimeout`. The age check is done using nested if-else statements to determine if the person is a minor, an adult, or a senior citizen.

//nasted loop is another example of how nesting can lead to complex and hard-to-read code. In this case, we have a loop that iterates over an array of numbers and checks if each number is even or odd. If the number is even, it logs "Even number: " followed by the number; if it's odd, it logs "Odd number: " followed by the number. This nested structure can make it difficult to follow the logic, especially as the complexity of the code increases. 


function getData(dataId, getNextData){  // 2 seconds
    setTimeout(() => {
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}

// explain ("This code demonstrates the use of a callback function to simulate fetching data with a delay. The 'getData' function takes a 'dataId' as an argument and uses 'setTimeout' to log the data after a delay of 2 seconds. This simulates an asynchronous operation, such as fetching data from a server. The use of callbacks allows for handling the result of the asynchronous operation once it is complete.")


// data1
// data2
// data3

getData(1, () => {
    getData(2, () => {
        getData(3);
    });
}); 

// explain ("This code demonstrates the use of nested callbacks to fetch multiple pieces of data in sequence. The 'getData' function is called with a 'dataId' and a callback function that fetches the next piece of data. The first call to 'getData' fetches data with ID 1, and once that is complete, it calls the next 'getData' function to fetch data with ID 2, and so on. This creates a chain of asynchronous operations, but it can lead to 'callback hell' where the code becomes difficult to read and maintain due to the nested structure.")