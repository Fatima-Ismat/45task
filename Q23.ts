//Conditional Test: Write a series of conditional test. print a statement describing each test and your prediction for the results of each test. your code should lok something like this:
//let car = 'subaru';
//console.log("is car == 'subaru'? I predict true.")
// • Look closely at your results, and makesure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to true and another 5 test evaluate to false

let car = 'subaru';
//console.log("is car == 'subaru'? I predict true otherwise I predict False.")
console.log(car == 'subaru');
console.log(car == 'Honda');
let num1: any = 26
//console.log("is num == 26(in number)? I predict true otherwise i predict False")
console.log(num1 === 26);
console.log(num1 === "26");

let carColor = 'red';
//console.log("is car's color 'red'? I predict true otherwise i predict false")
console.log(carColor === 'red');
console.log(carColor === 'blue');

let carModel = 'toyota'
//console.log("Is the car's model not 'honda'? I predict true otherwise i predict false");
console.log(carModel === 'toyota');
console.log(carModel === 'honda');

//console.log("Is the car's color 'red' and model 'toyota'? I predict true otherwise i predict false");
console.log(carColor === 'red' && carModel === 'toyota');
console.log(carColor === 'black' || carModel === 'nissan');