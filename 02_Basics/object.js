// Singleton

// object literal syntax

const mySym = Symbol("key1")

const JsUser = {
    name: "John",
    fullName: "John Doe",
    [mySym]: "key1",
    age: 18,
    location: "USA",
    email: "thomas@gooogle.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mySym] )

JsUser.email = "thomas@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "thomas@mic.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

