"use strict";
//21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let cars = {
    "car1": { make: "Toyota", model: "Corolla", year: 2020 },
    "car2": { make: "Honda", model: "Civic", year: 2019 },
    "car3": { make: "Ford", model: "Mustang", year: 2021 }
};
console.log("List of cars:");
for (let key in cars) {
    if (cars.hasOwnProperty(key)) {
        let car = cars[key];
        console.log(`${key}: ${car.year} ${car.make} ${car.model}`);
    }
}
