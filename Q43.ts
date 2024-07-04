// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


// Array magicians
let magician: string[] = ["Dania", "Harry Potter", "Sam", "Irfan"];


function display_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Function to add "the Great" to each magician's name and return a new array
function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push("the Great " + magician);
    }
    return great_magicians;
}

// Create a new array with "the Great" added to each magician's name
let great_magicians = make_great([...magician]);

// Show the original names of the magicians
console.log("Original Magicians:");
display_magicians(magician);

// Show the modified names of the magicians
console.log("\nGreat Magicians:");
display_magicians(great_magicians);