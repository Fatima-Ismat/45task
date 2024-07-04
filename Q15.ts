// 15. Changing Guest list:nyou jst heared that one of your guests can't make the dinner, so you need to send out a new set of invitation. you'll have to think of someone else to invite.

// • Start with your program from exercise 14. Add a print statement at the end of your program stating the name of the guest who can't make it.
// • Modify your list, replacng the name of the guest who can't make it with the name of the new person you are inviting.
// • Print a second set of invitation message, one for each person who is still in your list.

let guests: string[] = ["Aliza", "Noor", "Ismat", "Fatima", "Furqan"];

// Function to invite guests
function invite_Guests(guestList: string[]): void {
     for (let guest of guestList) {
         console.log(`Dear ${guest}, you are cordially invited to dinner.`);
     }
 }
 
 // Initial invitation
 console.log("Initial invitations:");
 invite_Guests(guests);
 
 // Guest who can't make it
 let unavailableGuest = "Ismat";
 console.log(`\nUnfortunately, ${unavailableGuest} can't make it to the dinner.`);
 
 // Replace the unavailable guest with a new guest
 let newGuest = "Ali";
 let guestIndex = guests.indexOf(unavailableGuest);
 if (guestIndex !== -1) {
     guests[guestIndex] = newGuest;
 }
 
 // New set of invitations
 console.log("\nNew invitations:");
 invite_Guests(guests);

