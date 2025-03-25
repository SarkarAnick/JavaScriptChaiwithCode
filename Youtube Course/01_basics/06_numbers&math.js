const score = 400 // js compiler auto understands it to be number
console.log(score);// O/P - 400

const balance = new Number(100) // explicit delcaration to be a number
console.log(balance) // in O/P explicitly shows its a number O/P - [Number: 100]

console.log(balance.toString());// now that it has become a string we can have differetn string functions applied to it
console.log(balance.toString().length)
console.log(balance.toFixed(2))//fixes precision value . places after decimal

const otherNumber = 23.8966
console.log(otherNumber.toFixed(2)); // when to fixed used with number it even rounds of the number

console.log(otherNumber.toPrecision(3)); // gives precise value with basis of number mention



