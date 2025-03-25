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
    name : "anick", //key : value
    age : 22,
}
let obj1 = {} //creating empty object
//FUNCTION -  there are multiple ways to declare 
// - here we will see the variable type way
const myFunction = function(){
  console.log("hello world");
  }


  
  

  //**  read more about datatypes from **
  // https://262.ecma-international.org/5.1/#sec-11.4.3

//********************************************************************************

/* MEMORY PART
   a. Stack ( used by all primitive datatypes ) -- when stack memory is used it means we get a copy of the variable we declared
   b. Heap ( non-primitive datatypes ) -- when heap memory is used we get reference of original variable 
*/

let myYoutubeName = "anicksarkar" // primitive datatype -- using stack

let anotherName = myYoutubeName
console.log(anotherName);
anotherName = "Sreya"
console.log(anotherName);
console.log(myYoutubeName); // original value is not changed . copy is chaned

//NON-PRIMITIVE DATATYPE -- (uses heap)
let userOne = {                     
      email:"user@google.com",
      upi: " user@ybl"
}

let userTwo= userOne
userTwo.email = "user2@google.com"
console.log(userOne.email); //gets updated by userTwo email
console.log(userTwo.email);


//the variable references 'userOne' and 'userTwo' are declared in stack but the data is in heap
// userTwo is actually referencing to the same dataset from heap as of userOne
