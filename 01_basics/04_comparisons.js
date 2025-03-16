// console.log(2>1)
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1); // both shows true -- automatically converts string 2 to number 2 .
console.log("02" > 1);// therefore sometimes creates error and gives unpredictable result

console.log(null > 0); // all false
console.log(null == 0);
console.log(null < 0);
console.log(null >= 0); // giving true -- unpredictable result
// the working principle of Equality check (==,===) and comparisons ()> < >= <=) work differently

console.log(undefined > 0);// all gives false
console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined <= 0);


//** Strict Check ( === ) */
console.log("2" == 2); // will give true as not strict check -- allows datatype conversion
console.log("2" === 2); // strictly checks datatype also








