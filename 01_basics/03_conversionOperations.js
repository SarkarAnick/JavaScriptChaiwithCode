let score = "33abc"
console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score) // converts string to number
console.log(typeof valueInNumber)
console.log(valueInNumber) // shows NaN`

//"33" => gets converted to 33 with converted to number
// "33abc" => gets converted to NaN 
//true => converts to 1 //false=> converts to 0
//null => 0
//undefined => NaN

let isLoggedIn = 1
let booleaIsLoggedIn = Boolean(isLoggedIn)
console.log(booleaIsLoggedIn)

// 1=> true
// 0=> false
// "" (emptystring) => false
// "any string" => true


let someNumber =  33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber) //will show string


// ****************************** OPERATIONS ****************************


let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2); //2^2
console.log(2/2);
console.log(2%2);

let str1 = "hello"
let str2 = " anick"
console.log(str1 + str2);

// ******* confusing section ******
console.log( "1" + 2 ); //12
console.log(1 + "2"); //12
console.log("1"+2+2); //122
console.log(1+2+"2"); // 32


console.log(+true); // converts true to number
console.log(+""); // converts true to number

let num1 , num2 , num3 ;
num1 = num2 = num3 = 1

let gameCounter = 100
gameCounter++
console.log(gameCounter);
//read prefix postfix from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment








