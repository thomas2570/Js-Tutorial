// what is the diff between function decleration and expression in term of hoisting ?


greet();
function greet(){
    console.log("Hello");
    
}
// Hello  

// convert ino array function

function multiply(a,d){
    return a * b;
}

let multiply = (a,b) => {
    return a * b;
};

function  sayHi(name = "Guest"){
    console.log("Hi", name);
    
}
sayHi();

// Hi Guest


// impure function jo bahar ki value ko change karta hai

let total = 0;
function addToTotal(num){
    total += num;
}

// convert into pure function

let total = 0;
function addToTotal(num){
    let newtotal = total;

    newtotal += num;
}

