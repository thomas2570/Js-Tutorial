
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

// call back hell ye hota jab hum ak call back ke andar dusra call back likhte hai aur ye chalta rehta hai. Isse code samajhne me mushkil hoti hai aur maintain karna bhi tough ho jata hai. Is problem ko solve karne ke liye hum promises ya async/await ka use karte hai jo code ko zyada readable aur manageable banata hai.



//--------------  Promises  ----------------- 

let promise = new Promise((resolve, reject) => {
    console.log("I am promise");
    resolve("success");
    reject("error");
});


// explain - promise ak object hoti hai js me ,jiski state 3 hoti hai - pending, fulfilled, rejected. Promise ka use hum asynchronous operations ke liye karte hai. Promise me hum resolve aur reject ka use karte hai. Agar promise successful hoti hai to resolve call hota hai aur agar promise fail hoti hai to reject call hota hai.

function getData(dataId, getNextData){ 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
             resolve("Success");
            if(getNextData){
                getNextData();
            }
        }, 2000);
    });
}

// explain ("This code demonstrates the use of Promises to handle asynchronous operations. The 'getData' function returns a Promise that simulates fetching data with a delay using 'setTimeout'. When the data is successfully fetched, the Promise is resolved with a success message. If there is an error, the Promise can be rejected. This approach allows for better handling of asynchronous operations compared to nested callbacks, making the code more readable and maintainable.") 

const getPromise = () =>{
  return new Promise((resolve, reject) => {
    console.log("I am promise");
    resolve("success");
    reject("error");
  });
}

let getPromiseResult = getPromise();
getPromiseResult.then((res) => {
    console.log("promise resolved with data:", res);
});

getPromiseResult.catch((err) => {
    console.log("promise rejected with error:", err);
});

// explain ("This code demonstrates the use of Promises with the 'then' and 'catch' methods to handle resolved and rejected states. The 'getPromise' function returns a Promise that logs a message and resolves with a success message. The 'then' method is used to handle the resolved state, logging the success message, while the 'catch' method is used to handle any errors that may occur, logging the error message. This approach provides a cleaner and more manageable way to handle asynchronous operations compared to nested callbacks.")  


// ------------------  Async/Await  ----------------- 

async function hello(){
    console.log("Hello, world!");
}
// explain ("This code demonstrates the use of the 'async' keyword to define an asynchronous function. The 'hello' function is marked as 'async', which allows it to use the 'await' keyword within its body. In this case, the function simply logs 'Hello, world!' to the console. The 'async' keyword indicates that the function may contain asynchronous operations and will return a Promise when called.") 

function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather api called");
            resolve(2000);
        }, 2000);
    });
}

async function getWeather(){
    await api();
}

// explaine in hindi ("Ye code async/await ka use karke asynchronous operations ko handle karne ka tarika dikhata hai. 'api' function ek Promise return karta hai jo 2 seconds ke delay ke baad resolve hota hai aur console me 'weather api called' print karta hai. 'getWeather' function ko 'async' keyword ke sath define kiya gaya hai, jisme 'await' ka use karke 'api' function ke complete hone ka wait kiya jata hai. Isse code zyada readable aur manageable ban jata hai, kyunki ye synchronous code ki tarah lagta hai.")

function getData(dataId, getNextData){ 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
             resolve("Success");
        }, 2000);
    });
}

async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
}

// explain in hindi ("Ye code async/await ka use karke multiple asynchronous operations ko sequentially handle karne ka tarika dikhata hai. 'getData' function ek Promise return karta hai jo 2 seconds ke delay ke baad resolve hota hai aur console me 'data' aur 'dataId' print karta hai. 'getAllData' function ko 'async' keyword ke sath define kiya gaya hai, jisme 'await' ka use karke pehle 'getData(1)', fir 'getData(2)', aur fir 'getData(3)' ke complete hone ka wait kiya jata hai. Isse code zyada readable aur manageable ban jata hai, kyunki ye synchronous code ki tarah lagta hai aur callback hell se bachata hai.")

// hum ya to async/await ka use karke multiple asynchronous operations ko sequentially handle kar sakte hai ya fir promise chaining ka use karke bhi handle kar sakte hai. Dono hi tarike code ko zyada readable aur manageable banate hai aur callback hell se bachate hai. aur then catch ka use karke bhi promise ko handle kar sakte hai. lakin hum sirf kisi ak ka use karte hai generally hum async await ka use karte hai better to understand hoti hai





// ----------------- IIFE -----------------------------------------------------

