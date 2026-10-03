let a = 10;
console.log(a); // 10
var b = 100;
console.log(b); // 100
 
// temporal dead zone: the time between the start of the block and the declaration of the variable. In this time, we cannot access the variable. If we try to access the variable in this time, we will get a reference error. The temporal dead zone is created by let and const. The temporal dead zone is not created by var. The temporal dead zone is created by let and const because they are block-scoped variables. The temporal dead zone is not created by var because it is function-scoped variable. --------   The Temporal Dead Zone (TDZ) is the period between the start of a code block and the moment a let or const variable is declared and initialized


console.log(a); // 10
let a = 20; // error: cannot redeclare block-scoped variable 'a'
var b = 200; // error: cannot redeclare block-scoped variable 'b'

console.log(x); // error: x is not defined (reference error)
let a = 10;
var b = 100;

let a = 20; // error: cannot redeclare block-scoped variable 'a'
let a = 30; // error: cannot redeclare block-scoped variable 'a'

// syntax error: cannot redeclare block-scoped variable 'a'

// iN Let we can not redeclare the variable in the same scope, but we can reassign the value of the variable. In var we can redeclare the variable in the same scope and also reassign the value of the variable.
// const is similar to let, but we cannot reassign the value of the variable. We can declare a const variable without initializing it, but we cannot reassign the value of the variable. We can also declare a const variable without initializing it, but we cannot reassign the value of the variable.

// type error: Assignment to constant variable. (reassigning the value of a const variable is not allowed)

// avoid temporal dead zone by declaring the variable at the top of the block. declaring the variable at the top of the block will make the variable accessible throughout the block. This will avoid the temporal dead zone and will prevent reference errors.