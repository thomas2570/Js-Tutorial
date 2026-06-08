// ager code likh diya to wo turant chal jata hai 











// {
//     console.log("T");
//     console.log("H");
//     console.log("O");
//     console.log("M");
//     console.log("A");
//     console.log("S");
// }

//sayMyname()

// function addTwoNumbers(number1,number2){ // parameters
//    console.log(number1+number2);
// }

// addTwoNumbers(3,4) // arguments
// const result = addTwoNumbers(3,5)
// console.log("Result: ", result);

function addTwoNumbers(number1,number2){ // parameters
//    let result = number1+number2
//    return result
 
return number1+number2
   console.log("Thomas"); // not print after result there is nothing print .
}

// outside of function 
const result = addTwoNumbers(3,5)
// console.log("Result: ", result);

function loginUserMessage(username= "Thomas"){

  if(username === undefined){ // its run when situation is true
    // if(!username){   // its change the false vakue into true value
    console.log("Please enter a username");
    return
    
  }

    return `${username} just logged in`
}

// console.log(loginUserMessage("Thomas"))
console.log(loginUserMessage()) // empty value maan liya jata hai ki wo false value hai

function  calculateCartPrice(...num1){
// function  calculateCartPrice(val1,val2, ...num1){ // return only 500
   return num1
}

console.log(calculateCartPrice(200,400,500));

const user = {
    username: "Thomas",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));