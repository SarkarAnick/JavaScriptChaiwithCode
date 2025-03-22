//Q1. Write a for-loop that loops through the array ["green tea" , "black tea" , "chai" , "oolong tea"] and stop the loop when it finds "chai". Store all tea before "chai" in a new array a named "selectedTeas"

let teas = ["green tea" , "black tea" , "chai" , "oolong tea"]
let selectedTeas = []
for(let i = 0 ; i <= teas.length ; i++)
{
  if(teas[i] === "chai")
  {
    break;
  }
  selectedTeas.push(teas[i])
}
console.log(selectedTeas);

console.log();

//Q2. Write a for loop that loops through the array ["London" , "New York" , "Paris" , "Berlin"] and skips "Paris". Store the other cities in a new array named "visitedCities".

let cities = ["London" , "New York" , "Paris" , "Berlin"]
let visitedCities = []
for( let i = 0 ; i < cities.length ; i++)
{
  // if(cities[i] !== "Paris")
  // {
  //   visitedCities.push(cities[i])
  // }
  //another way
  if(cities[i] === "Paris" || cities[i] === "paris" )
  {
    continue
  }
  visitedCities.push(cities[i])
}
console.log(visitedCities);

console.log();

//Q3. Use a for-of-loop to iterate through the array [1,2,3,4,5] and stop when the number "4" is found. Store the numbers before "4" in an array named "smallNumbers"

let numbers = [1,2,3,4,5]
let smallNumbers = []

for (const num of numbers) 
{
  if(num === 4)
    {
      break
    }
    smallNumbers.push(num) 
}
console.log(smallNumbers);

console.log();

//Q4. Use a for-of-loop to iterate through the array ["chai" , "green tea" , "herbal tea" , "black tea"] and skip "herbal tea". Store the other teas in an arrar named "preferredTeas"

let teas1 = ["chai" , "green tea" , "herbal tea" , "black tea"]
let preferredTeas = []
for(const nums of teas1)
{
  if( nums === "herbal tea")
  {
    continue
  }
  preferredTeas.push(nums)
}
console.log(preferredTeas);

console.log();

//Q5. Use a for-in-loop to loop through an object containing city populations. Stop the loop when the population of "Berlin" is found and store all previous cities population in a new object "cityPopulations"
/* let citiesPopulation = {"London" : 8900000,
                          "New York" : 840000,
                          "Paris" : 220000,
                          "Berlin" : 350000
                         }; 
*/


let citiesPopulation = {"London" : 8900000,
  "NewYork" : 840000, //key : value
  "Paris" : 220000,
  "Berlin" : 350000
 }; 

let cityNewPopulations = {}

// to know all the keys in the object
let arrKey = Object.keys(citiesPopulation)
//console.log(arrKey); // shows all key of the object in form of array
let arrValues = Object.values(citiesPopulation)
//console.log(arrValues);

for (const city in citiesPopulation) {
  if(city === "Berlin")
  { break }
  cityNewPopulations[city] = citiesPopulation[city]    
  
}
console.log(cityNewPopulations);
//Q6. Use a for-in-loop to loop through an object containing city populations. Skip through any city with a population below 3 million and store the rest in a new Object named "largeCities"

let worldCities = {
  "Sydney" : 5000000,
  "Tokyo" : 9000000, 
  "Berlin" : 3500000,
  "Paris" : 2200000
};
let largeCities = {}

for(const city in worldCities)
{
  if(worldCities[city] > 3000000)
  {
    largeCities[city] = worldCities[city]  
  }
  
}
console.log(largeCities);

console.log();

//Q7. Write a for-each-loop that iterates through the array ["earl grey" , "green tea" , "chai" , "oolong tea"]. Stop the loop when "chai" is found and store all previous tea types in a new array named "availableTeas"

let teaCollection = ["earl grey" , "green tea" , "chai" , "oolong tea"]
let availableTeas = []
teaCollection.forEach(function(tea){ //within for-each loop a function is being used . so the "continue" keyword cannot be used . so "return" is used
  if(tea === "chai")
  {
    return
  }
  availableTeas.push(tea)
});
console.log(availableTeas);

console.log();

//Q8. Write a for-each-loop that iterates through the array ["Berlin" , "Tokyo" , "Sydney" , "Paris" ]. Skip "Sydney" and store the other cities in a array named "travelledCities"

let bigCity = ["Berlin" , "Tokyo" , "Sydney" , "Paris"] 
let travelledCities = []
bigCity.forEach(element => {
  if(element === "Sydney")
  {
    return
  }
  travelledCities.push(element)
});
console.log(travelledCities);

console.log();

//Q9. Write a for-loop that iterates through the array [2,3,7,9]. Skip the value 7 and multiply the rest by 2 .Store the results in a new array named "doubledNumbers"

let number = [2,3,7,9]
let doubledNumbers = []
for (let i = 0; i < number.length; i++) {
  if(number[i] === 7)
  { continue }
  doubledNumbers.push(number[i]*2)
}
console.log(doubledNumbers);

console.log();

//Q10. Use a for-of loop through the array ["chai" , "green tea" , "black tea" , "jasmine tea" , "herbal tea"]. Stop when the length of the current tea name is greater then 10, Store the teas iterated over in an array named "shortTeas"

let teaTypes = ["chai" , "green tea" , "black tea" , "jasmine tea" , "herbal tea"]
let shortTeas = []
for (const tea of teaTypes) {
  let lengthWithoutSpaces = tea.replace(/\s/g,"").length 
  console.log(tea + ":" + lengthWithoutSpaces);
  
  if(lengthWithoutSpaces >= 10)
  {
    continue
  }
  shortTeas.push(tea)
}
console.log(shortTeas);
