const name = "anick"
const repoCount = 50
console.log(name + repoCount + " value") // not a good syntax to do work

// use backticks (` `)  - uses String Interpolation(mordern way of using string) - infuses placeholders for Variable Injection
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('anickrc')
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



