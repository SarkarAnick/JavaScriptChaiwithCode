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
