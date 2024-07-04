"use strict";
// 16. More Guests: You just found a bigger dinner table, so now space is available. Think of three more guests to invite to dinner.
// • Start with your program from Excercise 15. Add a print statement to the end of your bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Print a new set of invitation messages, one for each person in your list.
// Create a list of guests
let guest = ["Aliza", "Nosheen", "Furqan"];
// Function to invite guests
function guestsInvite(guestList) {
    for (let guest of guestList) {
        console.log(`Dear ${guest}, you are cordially invited to dinner.`);
    }
}
// Initial invitation
console.log("Initial invitations:");
guestsInvite(guest);
// Inform about the bigger table
console.log("\nGreat news! We found a bigger dinner table.");
// Add new guests
guest.unshift("Zohair"); // Add to the beginning
guest.splice(Math.floor(guest.length / 2), 0, "Noor"); // Add to the middle
guest.push("Ali"); // Add to the end
// New set of invitations
console.log("\nNew invitations:");
guestsInvite(guest);
