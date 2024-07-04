"use strict";
// 17. Shirinking Guest List: You just found out that your new dinner table won't arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Excercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your lists, print a message to that person lettingthem know you,re sorry you can't invite them to dinner.
// • Print a message to each of the two people still on your list, letting them knew they're still invited.
// • Remove the last two names from your list, so you have an empty list. print your list to make sure you actually have an empty list at the end of your program. 
// Create a list of guests
let guestArr3 = ["Ismat", "Aliza", "Ghayyour", "Nosheen", "Zohair", "Ali", "Noor", "Mehwish", "Aliya"];
// Function to invite guests
function inviteGuests(guestList) {
    for (let guestArr3 of guestList) {
        console.log(`Dear ${guestArr3}, you are cordially invited to dinner.`);
    }
}
// Initial invitation
console.log("Initial invitations:");
inviteGuests(guestArr3);
// Inform about the bigger table
console.log("\nGreat news! We found a bigger dinner table.");
guestArr3.unshift("Noor");
guestArr3.splice(Math.floor(guestArr3.length / 2), 0, "Fatima");
guestArr3.push("Safder");
console.log("\nNew invitations:");
inviteGuests(guestArr3);
// Inform about the shrinking guest list
console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can invite only two people for dinner.");
// Remove guests until only two remain
while (guestArr3.length > 2) {
    let removedGuestArr3 = guestArr3.pop();
    if (removedGuestArr3) {
        console.log(`Sorry ${removedGuestArr3}, we can't invite you to dinner.`);
    }
}
// Inform the remaining guests that they're still invited
console.log("\nInvitations to the remaining guests:");
inviteGuests(guestArr3);
// Remove the last two guests to have an empty list
guestArr3.pop();
guestArr3.pop();
// Print the empty list
console.log("\nFinal guest list:", guestArr3);
