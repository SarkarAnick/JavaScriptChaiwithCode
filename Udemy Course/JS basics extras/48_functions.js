//Q1. Write a function named "makeTea" that takes one parameter "typeOfTea" and returns a string like "making green tea" when called with "green tea". Store the result in a variable named "teaOrder"

function makeTea(typeOfTea)
{
  return (`making ${typeOfTea}`)
}

let teaOrder = makeTea("lemon tea")
//console.log(teaOrder);

//Q2. Create a function named "orderTea" tht takes one parameter , "teaType".Inside this function ,create another function named "confirmOrder" that returns a message like "Order confirmed for chai" .Call "confirmOrder" from within "orderTea" amd return the result

function orderTea(teaType)
{
  function confirmOrder()
  {
    return ("Order confirmed for chai") // javascript execution context
  }
  return (confirmOrder())
}
let message  = orderTea()
//console.log(message);

//Q3. Write an arrow-function named "calculateTotal" that takes two parameters : "price" and "quantity" . The function should return the total cost by multiplying the "price" and "quantity". Store the result in a variable named "totalCost"

// another way to declare a function is ()=>{} --> unnamed function
const calculateTotal = (price , quantity) =>{
  return price*quantity
}
// since the function is one line we could have written this in another way 
// const calculateTotal = (price, quantity) => price*quantity
// the only constraint this way is that there should not be any enter pressed while writing the line
totalCost = calculateTotal(499 , 100)
//console.log(totalCost);

// ## HIGHER ORDER FUNCTIONS ##

//Q4. Write a function named "processTeaOrder" that takes another function "makeTea" as a parameter and calls it with the argument "earl grey". Return the result of calling "makeTea"

function makeTea(typeOfTea1){
  return (`make tea : ${typeOfTea1}`)
}
function processTeaOrder(teaFunction){
  return teaFunction("earl grey")
}
let result = processTeaOrder(makeTea)
//console.log(result);


//Q5. Write a function named "createTeaMaker"  that returns another function . The returned Function should take one parameter "teaType" and return a message like "Makig green Tea" .Store the returned function in a variable named "teaMaker" and call it with "greenTea"

function createTeaMaker()
{
  return function(teaType)
  {
    return(`making  ${teaType}`);
  };
}
let teaMaker = createTeaMaker()
let result1 = teaMaker("green tea")
console.log(result1);
