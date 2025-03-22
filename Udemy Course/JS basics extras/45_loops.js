//Q1. Write a while-loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable names 'sum'

let sum = 0 ;
let i = 1 ;
while (i <= 5) 
{
 sum += i
 i++ 
}
console.log(`sum of 1 to 5 is ${sum}`);

console.log();

//Q2. Write a while-loop that counts down from 5 to 1 and stores the numbers in an array named "countdown"

let countdown = []
let j = 5 
while(j > 0)
{
  countdown.push(j)
  j--;
}
console.log(countdown);

console.log();





//Q5. Write a for-loop that multiplies each element in the array [2,4,6] by 2 and stores the result in a new array named 'multipliedNumbers'

let multipliedNumbers = []
let orgNumbers = [2,4,6]

for (let k = 0; k< orgNumbers.length; k++) 
{
multipliedNumbers.push(orgNumbers[k] * 2)
}

console.log(multipliedNumbers);

console.log();

//Q6. Write a for-loop that lists all the citites in the array ["Paris" , "New York" , "Tokyo" , "London"] and store each city in a new array named "cityList"

let cities = ["Paris" , "New York" , "Tokyo" , "London"]
let cityList = []
for(let m = 0 ; m < cities.length ; m++)
{
  cityList.push(cities[m])
  //cityList.unshift(cities[m]) // when unshifted into an empty array(cityList) cities[] is stored in reversed order in cityList[]
}
console.log(cities);
console.log(cityList);

console.log();


