const accountId = 14453

// tbhi create kariye jab value naa badle

let accountEmail = "thomasramesh@gmail.com"
// blocked scope hota hai
// { in side of this function }
// global scope


var accountPassword = "12345"

// var window me add hota hai
// function scoped hota hai it mean ye pure function me kahi bhi use ho sakta hai
// ap fir se declare kar sakte ho same name se and errors nahi aayega

accountCity = "Delhi"

// accountId = 2 not allowed

accountEmail = "hc@hc.com"
accountPassword = "24639"
accountCity = "Jaipur"
console.log(accountId);

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity]);
