function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    y();
}
x();

// closures a function bind together with its lexical environment 

function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z); // [Function: y]
// 

function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    a = 100;
    return y;
}
var z = x();
console.log(z);
z(); // 100 Explanation: The function y() is returned from the function x() and assigned to the variable z. When z() is called, it still has access to the variable a from its lexical environment, which is why it logs 100 to the console. This demonstrates the concept of closures in JavaScript, where an inner function retains access to the variables of its outer function even after the outer function has finished executing.
