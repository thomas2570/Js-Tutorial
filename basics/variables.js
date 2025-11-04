const accountId = 14453
let accountEmail = "thomasramesh@gmail.com"
var accountPassword = "12345"
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
