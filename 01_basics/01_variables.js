const accountId = 144553
let accountEmail = "anick@google.com"
var accountPassword = "12345"
/*
Prefer not to use and only use let to declare variables
because of issue in block scope and functional scope
*/

let  accountState; //will show undefined
accountCity = "kolkata"

//accountId = 2 // not allowed to change const declared variables
console.log(accountId);
accountEmail = "sreya@gmail.com"
accountPassword  = "123456"
accountCity = "barrackpore"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])