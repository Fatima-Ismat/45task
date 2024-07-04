"use strict";
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
class Shirt {
    constructor(size = "large", message = "I love TypeScript") {
        this.size = size;
        this.message = message;
    }
}
function make_shirt1(size = "medium", message = "I love TypeScript") {
    return new Shirt(size, message);
}
// Creating a large shirt with the default message
const largeShirt = make_shirt1();
console.log("Large Shirt:", largeShirt);
// Creating a medium shirt with the default message
const mediumShirt = make_shirt1("medium");
console.log("Medium Shirt:", mediumShirt);
// Creating a custom shirt with a different message and size
const customShirt = make_shirt1("small", "TypeScript is awesome!");
console.log("Custom Shirt:", customShirt);
