{
    var a = 1;
    console.log(a);
    
}
 // inside the {} is block and block used to multiple statements also can say combine multiple statements.

 {
    var a = 10;
    let b = 20;
    const c = 30; // b and c are block scoped variables and a is function scoped variable and also global.
 }

 {
    var a = 10;
    let b = 20;
    const c = 30;
    log(a); // 10
    log(b); // 20
    log(c); // 30
 }
 log(a); // 10
 log(b); // error: b is not defined (reference error) because b is block scoped variable and also c is block scoped variable and a is function scoped variable and also global.
 log(c); // error: c is not defined (reference error) because c is block scoped variable and also a is function scoped variable and also global.


 // shadowing means when a variable declared in the inner scope with the same name as a variable declared in the outer scope. In this case, the inner variable shadows the outer variable.

 var a = 100;
 {
    var a = 10;
    let b = 20;
    const c = 30;
    log(a);
 }
 log(a); // 10 because a is function scoped variable and also global and also shadowing is happening here.

 let b = 200;
 {
    var a = 10;
    let b = 20;
    const c = 30;
    log(b); // 20 because b is block scoped variable and also shadowing is happening here.
 }
 log(b); // 200 because b is block scoped variable and also shadowing is not happening here.

 // same show ing is happening with const variable also.

 // even if we in function show same thing is happening with function also.

 let a = 10;
 {
    var a = 20; // error: a has already been declared (syntax error) because a is block scoped variable and also shadowing is happening here. illegal shadowing is happening here because a is block scoped variable and also shadowing is happening here.
 }

 let a = 10;
function test() {
    var a = 20; // legal shadowing is happening here because a is function scoped variable and also shadowing is happening here.
} // show no error because a is function scoped variable and also shadowing is happening here.