"use strict";
// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// Array magicians
const magicians = ["Dania", "Harry Potter", "Sam", "Irfan"];
function show_magician1(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magician1(magicians);
