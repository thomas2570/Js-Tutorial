function a(){
    console.log(b);
}
var b = 10;
a();


// o/p = 10;

function a(){
    c();
    console.log(b);
    fuction c(){
        console.log(b);
}
}
var b = 10;
a();

// o/p = 10;

function a(){
   var b = 20;
    console.log(b);
    fuction c(){
        console.log(b);
}
}
a();

// o/p = 20;

function a(){
   var b = 20;
    console.log(b);
    fuction c(){
}
}
a();
console.log(b); 


// error: b is not defined

// lexical environment: the scope of a variable is defined by its position in the source code. a lexical in global environment is the global scope, and a lexical local environment is the local scope of a function.
// c siting inside a siting inside b, c can access b and a, but b cannot access c. c siting in function inside a, c can access a and b, but a cannot access c.

