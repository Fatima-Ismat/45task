// //18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// Define the array of places
let places: string[] = ["Korea", "America", "Swizerland", "Behrain", "England"];

// Print the array in its original order
console.log("Original order:", places);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...places].sort());

// Show that the array is still in its original order
console.log("Original order after sorting:", places);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...places].sort().reverse());

// Show that the array is still in its original order
console.log("Original order after reverse sorting:", places);

// Reverse the order of the list
places.reverse();
console.log("Reversed order:", places);

// Reverse the order of the list again
places.reverse();
console.log("Reversed back to original order:", places);

// Sort the array so it's stored in alphabetical order
places.sort();
console.log("Sorted in alphabetical order:", places);

// Sort to change the array so it's stored in reverse alphabetical order
places.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", places);

