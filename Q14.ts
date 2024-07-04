// 14. Guest list: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you'd like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestArr: string[] = ["Aliza", "Noor", "Ismat", "Fatima", "Furqan"]

function inviteGuest(guestList: string[]): void {
    for (let guest of guestList) {
        console.log(`Dear ${guest}, you are cordially invited to dinner.`);
    }
}

// Call the function to invite guests
inviteGuest(guestArr);
