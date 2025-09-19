// Array in js 
let fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits:", fruits);

// Accessing elements
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);

// Adding an element
fruits.push("Date");
console.log("After adding Date:", fruits);

// Removing the last element
let removedFruit = fruits.pop();
console.log("Removed fruit:", removedFruit);
console.log("After removing last fruit:", fruits);

// Iterating through the array
fruits.forEach((fruit, index) => {
    console.log(`Fruit at index ${index}: ${fruit}`);
});

// Array length
console.log("Number of fruits:", fruits.length);

// Finding an element
let hasBanana = fruits.includes("Banana");
console.log("Contains Banana:", hasBanana);

// Finding index of an element
let cherryIndex = fruits.indexOf("Cherry");
console.log("Index of Cherry:", cherryIndex);

// Merging arrays
let moreFruits = ["Elderberry", "Fig"];
let allFruits = fruits.concat(moreFruits);
console.log("All fruits:", allFruits);

// Slicing an array
let someFruits = allFruits.slice(1, 4);
console.log("Sliced fruits (index 1 to 3):", someFruits);

// Reversing the array
let reversedFruits = [...allFruits].reverse();
console.log("Reversed fruits:", reversedFruits);

// Sorting the array
let sortedFruits = [...allFruits].sort();
console.log("Sorted fruits:", sortedFruits);

// Clearing the array
fruits.length = 0;
console.log("Cleared fruits array:", fruits);

// Checking if a variable is an array
isArray = Array.isArray(allFruits);
console.log("Is allFruits an array?", isArray);