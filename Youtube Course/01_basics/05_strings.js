const name = "anick"
const repoCount = 50
console.log(name + repoCount + " value") // not a good syntax to do work

// use backticks (` `)  - uses String Interpolation(mordern way of using string) - infuses placeholders for Variable Injection
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('anick-rc')
console.log(gameName);
console.log (gameName[0]); // dont think this as array -- this is key value pair . go to browser and type line 8 in console of it then expand it to see keyvalue pair
/*
0 : "a"
1 : "n"
2 : "i"
3 : "c"
4 : "k"
5 : "r"
6 : "c"
length: 7
*/
console.log(gameName.__proto__);// shows its an object
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // character at position 2
console.log(gameName.indexOf('c')); // shows position of first appearance of character . ignores any next occurences. if character not present will show -1
const newString = gameName.substring(0,4) // from 0th position to (4-1)th position or 4 characters from 0th position

const anotherString = gameName.slice(-8,4) // can put negative values as well. string will be traversed reversed order
console.log(anotherString);
const newString1 = "   anick   " // strings with multiple unnecessary spaces common encounter in real time scenarios
console.log(newString1);
console.log(newString1.trim()); //trims extra spaces

const url = "https://anick.com/anick %20 sarkar" //url should be together coz browser donot understand spaces
console.log(url.replace('%20','-'))

console.log(url.includes('hitesh')) // checks if present in string -- returns in boolean
let gameName1 = "anick-sarkar-sreya-chowdhury"
console.log(gameName1.split('-')); // divides string on basis of input character and converts splitted string into array








