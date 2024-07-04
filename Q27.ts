// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alienColor1: string = "green"

if (alienColor1 === "green"){
     console.log("Player just eared 5 points!")
}
else if (alienColor1 === "yellow"){
     console.log("Player just earned 10 points!")
}
else if (alienColor1 === "red"){
     console.log("Player just earned 15 points!")
}

//version 2

let alienColor2: string = "yellow"

if (alienColor2 === "green"){
     console.log("Player just eared 5 points!")
}
else if (alienColor2 === "yellow"){
     console.log("Player just earned 10 points!")
}
else if (alienColor2 === "red"){
     console.log("Player just earned 15 points!")
}

// version 3
let alienColor3: string = "red"

if (alienColor3 === "green"){
     console.log("Player just eared 5 points!")
}
else if (alienColor3 === "yellow"){
     console.log("Player just earned 10 points!")
}
else if (alienColor3 === "red"){
     console.log("Player just earned 15 points!")
}

