/* PRIMITIVE DATATYPES -- call by value original memory reference is not given - copy of original memory reference is given
   7 types:
   a. String
   b. Number 
   c. Boolean
   d. Undefined
   e. Null
   f. Symbol
   g. BigInt
*/  
const score = 45 // javascript is dynamically typed language means type of variable is declared at runtime rather than compile time
const scoreValue = 100.3 // both are numbers . no difference between integer and decimal

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined; // undefined declared na kora thakleo O/P te undefined i dekhato

//DECLARATION OF SYMBOL DATA TYPE
const id = Symbol('123') // when a random string needs to be unique we declare it as string
const anotherId = Symbol('123')
console.log(id);
console.log(anotherId);
console.log(id === anotherId); // false . even though id and anotherId appears same ; they arent

const bigNumber = 1234567890987654321n
console.log(typeof bigNumber);


/* REFERENCE / NON-PRIMITIVE DATA TYPE - direct memory reference can be allocated 
    
   Types: 
   a. Array
   b. Functions -- datatype is 'object function'
   c. Objects

   ** the datatype of all NON-PRIMITIVE DATATYPE IS 
        object _______(can be array/function/object)

*/

//ARRAY
const heroes = ["superman","batman","antman"]
//OBJECT
let myObj = { //can contain any datatype primitive/reference
    name : "anick",
    age : 22,
}
//FUNCTION -  there are multiple ways to declare 
// - here we will see the variable type way
const myFunction = function(){
  console.log("hello world");
  }


  console.log();
  

  //**  read more about datatypes from **
  // https://262.ecma-international.org/5.1/#sec-11.4.3