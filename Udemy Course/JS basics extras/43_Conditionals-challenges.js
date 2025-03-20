//chechking if number greater 

let num1 = 5
let num2 = 6

console.log(" regular upper code");

if(num1>num2)
{
  console.log("num1 is more than num2");
}
else
{
  console.log("num2>num1");
  
}
console.log();


// checking id string is equal to another string

let username = "juice"
let username1 = "juice"
if(username == username1)
{
  console.log("yes both equal");
}
console.log();

//check is variable is a number or not

let score = 44
if( typeof score === "number")
{
  console.log("yes a number");
}
else
{
  console.log("no not a number");
}
console.log();

//check is a boolean value is true or false

let isTeaReady = true;
if( isTeaReady)// if block-condition is true then it executes
{
  console.log("yes tea is ready");
}
else 
{
  console.log("tea is not ready");
}
console.log();

//check if array is empty or not

let  items = [1,2]
if(items.length == 0)
{
  console.log("array empty");
}
else{
  console.log("array not empty");
}
console.log(items.length);


