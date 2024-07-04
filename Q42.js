"use strict";
// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Array magicians
let magicians1 = ["Dania", "Harry Potter", "Sam", "Irfan"];
function show_magician(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Function to add "the Great" to each magician's name
function make_great1(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians1[i] = "the Great " + magicians1[i];
    }
    return magicians;
}
// Modify the magicians array
magicians1 = make_great1(magicians1);
// Show the modified names of the magicians
show_magician(magicians1);
