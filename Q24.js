"use strict";
//24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// • Tests for equality and inequality with strings
// const string1: string = "Apple";
// const string2: string = "Orange";
// console.log(string1 === string2);
// console.log(string1 !== string2);
// • Tests using the lower case function
// const mixedCaseString: string = "HelloWorld";
// console.log(mixedCaseString.toLowerCase() === "helloworld")
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const n1 = 20;
const n2 = 15;
console.log(n1 === n2);
console.log(n1 !== n2);
console.log(n1 > n2);
console.log(n1 < n2);
console.log(n1 >= n2);
console.log(n1 <= n2);
// • Tests using "and" and "or" operators
const condition1 = true;
const condition2 = false;
console.log(condition1 && condition2);
console.log(condition1 || condition2);
// • Test whether an item is in a array
const fruits = ["Apple", "Orange", "Banana", "Kiwi"];
console.log(fruits.includes("Kiwi"));
console.log(fruits.includes("kiwi"));
