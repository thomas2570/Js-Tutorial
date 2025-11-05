// Primitive data type
// 7 types 
// 1 String
// 2 Number
// 3 Boolean
// 4 Null
// 5 Undefined
// 6 Symbol
// 7 BigInt

const score = 100;
const scoreValue = 100.5;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;


const id = Symbol("1234");
const anotherId = Symbol("1234");

console.log(id === anotherId);

const bigNumber = 3456789012345678901234567890n;

const heros = ["Shaktiman", "Naagraj", "Doga"];
let myObj = 
{
    name:"Thomas",
    age: 30,
}

// Non-primitive data type
// 1 Object

// Example of each primitive data type

// referenceTypes (Non primitive data type)
// Array 
// Object
// Functions
function myFunction() {
    console.log("Hello!");
}
myFunction();

console.log(typeof bigNumber);



// ********************************* Memories in Js *********************************************//


// Stack Memory(primitive) , heap Memory(Non-primitive)
 let myYoutubename = "elitesgaming01"
 
 let anothername = myYoutubename
 anothername = "elitesgaming02"

 console.log(myYoutubename);
 console.log(anothername);

 const user = {
    email: "user@google.com",
    upi: "user@ybl"
};

 let usertwo = user

 usertwo.email = "thomas@google.com"

 console.log(user.email);

    console.log(usertwo.email);