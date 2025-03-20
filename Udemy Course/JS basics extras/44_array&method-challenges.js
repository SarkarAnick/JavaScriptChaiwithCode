//Q1. declare an array called "tea flowers" that contains teh strings "green tea" , "black tea" and "oolong tea". Access the first element and store it in a variable called "firstTea"

let teaFlavours = ["green tea" , "black tea" , "oolong tea"]
//another way to declare array
let teaFlavour1 = new String("green tea" , "black tea" , "oolong tea")

let firstTea = teaFlavours[0]
console.log(firstTea);

console.log();

//Q2. Declare an array names "cities" containing "London" , "Tokyo" , "paris" and  "New York".Access the third element of the array and store it in a variable named "favouriteCity"

let cities = ["London" , "Tokyo" , "Paris" , "New York"]
let favouriteCity = cities[2]
console.log(favouriteCity);

console.log();

//Q3. You have an array named `teaTypes` containing "herbal tea" , "white tea" and "masala tea" . Change the second element of the array to "Jasmine Tea"

let teaTypes = ["herbal tea" , "white tea" , "masala tea"]
teaTypes[1] = "Jasmine Tea"
console.log(teaTypes);

console.log();

//Q4. Declare an array named "cityVisited" containing "Mumbai" and "Sydney" . Add "Berlin" to the array using the push method

let cityVisited = ["Mumbai" , "Sydney"]
// cityVisited[cityVisited.length] = "Berlin"
// console.log(cityVisited);  // this is one way but a fancy way
cityVisited.push("Berlin")// array function to automatically add element to the end of an array
console.log(cityVisited);

console.log();

//Q5. You have an array named 'teaOrders' with "chai" , "iced tea" , "matcha" , "earl grey" .Remove the last element of the array using the 'pop' method and store it in a variable named " lastOrder"

let teaOrders = ["chai" , "iced-tea" , "matcha" , "earl-grey"]
const lastOrder = teaOrders.pop(); // array function to automatically delete last element
console.log(teaOrders);
console.log(`lastorder was ${lastOrder} . it has been deleted`);

console.log();

//Q6. You have an array named "popularTeas" containing "green tea" , "oolong tea" , "chai" . Create a soft copy of this array named "softCopyTeas"

let popularTeas = ["green tea" , "oolong tea" , "chai"] 
// popularTeas(var name) -------> (array)["green tea" , "oolong tea" , "chai"]
let softCopyTeas = popularTeas 
// it may seem like softCopyTea(var name) ---------> popularTeas(varname) --------> (array)
// but actually **softCopyTea(var name) ----------->(array)<-----------popularTeas(varname)
// both the variable name refers to the same memory address of array . so manipulating array through any of the variable name will actually change on the array itself
// ## any maipulation done on the original variable will always reflect through the "SOFT COPY VARIABLE"
popularTeas.pop();//popping only from popularTeas but reflected in both array even though pop is executed on popularTeas
console.log(softCopyTeas)
console.log(popularTeas);

console.log();

//Q7. You have an array named "topCities" containing "Berlin" , "Singapore" , "New York" . Create a hard copy of this array named "hardCopyCities"

let topCities = ["Berlin" , "Singapore" , "New York"]
let hardCopyCities  = [...topCities] // [...] is called Rest-and-Spread operators
//creates hard copy of "topCities" . any change done on topCities wont be reflected on hardCopyCities and any change done on hardCopyCities wont be reflected on topCities . 
topCities.pop()
console.log(topCities);
console.log(hardCopyCities);

// ## another method to do this ##
// let hardCopyCities = topCities.slice();

console.log();

//Q8. You have two arrays . "europeanCities" containing "Paris" and "Rome" and "asianCities" containing "Tokyo" and "Bangkok". Merge this two arrays into a new array named "worldCities"

let europeanCities = ["Paris" , "Rome"]
let asianCities = ["Tokyo" , "Bangkok"]
// let worldCities = europeanCities + asianCities
// console.log(worldCities);
// console.log(typeof worldCities); //not the right way to do things -- changes array to string

let worldCities = europeanCities.concat(asianCities)
console.log(worldCities);

console.log();

//Q9. You have an array named "teaMenu" containing "Masala Chai" , "Oolong Tea" , "Green Tea" , "Earl Grey" . Find the length of the array and store it in a variable named "menuLength".

let teaMenu = ["Masala Chai" , "Oolong Tea" , "Green Tea" , "Earl Grey"]
let menuLength = teaMenu.length
console.log(menuLength);

console.log();

//Q10. You have an array called "cityBucketList" containing "Kyoto" , "London" , "Cape Town" , "Vancouver". Check if London is in the array and store the result in a variable named "isLondonInList".

let cityBucketList = ["Kyoto" , "London" , "Cape Town" , "Vancouver"]
let isLondonInList = cityBucketList.includes("London") // .includes is case sensitive means if London was written in lower case then it would return false
console.log(isLondonInList);


// ## SOME EXTRA ARRAY FUNCTIONS ## 
let array = [1,2,3]
let elementShifted = array.shift() // .shift removes 1st element and makes all other element move 1 position before
console.log(elementShifted);
console.log(array);

console.log();

let elementunshifted = array.unshift(2,3) // shows length of new array after adding the new elemnts in the front of the array
console.log(elementunshifted);
console.log(array);

//console.log(array.unshift(2,3));
console.log();


let arr1 = [1,2,3]
let arr2 = [4,5,6]
console.log(arr1.concat(arr2));





