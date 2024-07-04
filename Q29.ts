//29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

const favoriteFruits: string[] = ["Banana", "mango", "Strawberry"];
if(favoriteFruits.includes("Banana")){
     console.log("you really like Bananas!")
}
if(favoriteFruits.includes("Mango")){
     console.log("you really like Mango!")
}
if(favoriteFruits.includes("Orange")){
     console.log("you really like Orange!")
}else{
     console.log("Orange is not in your favorite list.");
}
if(favoriteFruits.includes("Strawberry")){
     console.log("you really like Strawberries!")
}
if(favoriteFruits.includes("Grapes")){
     console.log("you really like Grapes")
}else{
     console.log("Grapes are not in your favorite list!")
}
