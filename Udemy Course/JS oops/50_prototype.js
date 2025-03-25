//JS is prototype based programming it feels like object oriented programming but it actually isnt it just feels so due to the approad and keywords like "class" "object" "constructor" .
let computer = {cpu : 12 } // we are using objects here but could have used arrays too
let lenovo = { 
  screen : "HD",
  __proto__ : computer //old way of declaring prototype
};
let tomHardware = {}
console.log(`computer` , computer.__proto__); //will show null prototype here but write this is chrome and u can see various things to than can be applied on the object // the way of writing __proto__ is called "dunder prototype" its double underscore 
console.log(lenovo.__proto__);

console.log();


let genericCar = {
  tyres: 4,
  window : 2,
  engine : 1
}
 
let tesla = {
  driver : "AI"
}
Object.setPrototypeOf(tesla, genericCar)
console.log(`tesla`, Object.getPrototypeOf(tesla));

console.log(tesla.hasOwnProperty("tyres")); //false as not own but inherited property
console.log(tesla.hasOwnProperty("driver")); //true as own property