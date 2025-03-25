function Person(name , age){
  this.name = name //instead of writing let Name(local variable) = name(global variable) ; we can write this.name = name
  this.age = age
}

function Car(make , model){
  this.make = make // this keyword refers to new created object inside a function
  this.model = model
}

let myCar = new Car("Toyota" , "Corolla")// to create new object we have to use the new keyword
console.log(myCar);

let myNewCar = new Car("Honda" , "Civic")
console.log(myNewCar);

console.log();


function tea(type){
  this.type = type
  this.describe = function(){
    return(`This is ${this.type}`);
  }
}

let lemonTea = new tea("Lemon tea")
console.log(lemonTea);
console.log(lemonTea.describe());

console.log();


// ## CONSTRUCTOR FUNCTION AND PROTOTYPE ##

function animal(species){
  this.species = species
}

animal.prototype.sound = function(){
  return (`${this.species} makes a sound`)
}

let dog = new animal("dog")
console.log(dog);
console.log(dog.sound);
console.log(dog.sound());

let cat = new animal("cat")
console.log(cat.sound());

