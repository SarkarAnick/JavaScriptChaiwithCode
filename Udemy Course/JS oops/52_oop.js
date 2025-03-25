// Encapsulation : binding of data and methods together into a single unit
// Abstraction : hiding of data and methods from the outside world
// Polymorphism : ability of objects to take on many forms  
// Inheritance : ability of objects to inherit properties and methods from other objects like proto we used in 51 lecture

// even classes are object and core implementation of class is also object
// class is a template for creating objects
// object is an instance of a class
// class is a blueprint for creating objects
 let car = {
   make: "Toyota",
   model: "Camry",
   year: 2020,
   start : function(){
        return (`${this.make} ${this.model} has started`);
   }
 }
 console.log(car.start());

 console.log();
 
 // constructor function
 function Person(name, age){
   this.name = name // this keyword refers to new created object inside a function
   this.age = age
 } // we can create as many objects of this function as we like to example john

 let john = new Person("John" , 30)
 console.log(john);
 console.log(john.name);
 console.log(john.age);

 console.log();

 function Animal(type){
   this.type = type
 }

 Animal.prototype.speak = function(){
  return `${this} makes a sound`
 }

 Array.prototype.anick = function(){
  return `custom method ${this}`
 }
let myArray = [1,2,3];
console.log(myArray.anick());

let myNewArray = [1,2,3,4,5,6]
console.log(myNewArray.anick());

console.log();
 
//class 
class Vehicle{ // functions inside a class are called methods
  constructor(make, model){
    this.make = make
    this.model = model
   }
   start(){
    return `${this.make} ${this.model} has started`
   }
}

let car1 = new Vehicle("Toyota" , "Camry")
console.log(car1.start());

//inheritance
class Car extends Vehicle{ // class Car inherits the properties of Vehicle
// "extends" is the keyword of inheritence  
drive(){
    return`${this.make} ${this.model} : example of inheritence`
  }
}

let car2 = new Car("Honda" , "City")
console.log(car2.drive());
console.log(car2.start());

let vehicle1 = new  Vehicle("TATA" , "NANO")
console.log(vehicle1.start());
console.log(vehicle1.make);

console.log();


//encapsulation
class BankAccount
{
  #balance = 0 // -- this variable has a '#' at front so it cannot be accessed out of the class

  deposit(amount)
  {
    this.#balance += amount
    return this.#balance
  }
  getBalance()
  {
      return `$ ${this.#balance}`
  }
}

let account = new BankAccount()
account.deposit(5000)
console.log(account.getBalance());


// ## ABSTRACTION ## 
