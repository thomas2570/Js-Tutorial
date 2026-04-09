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


