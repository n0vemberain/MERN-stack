// const : value can not bd changed
// let : value can be changed
// var : old way of declaring variable

// loops in js

// for loop
for (let i = 1; i <= 5; i++) {
    console.log(`For Loop Iteration: ${i}`);
}

// while loop
let j = 1;
while (j <= 5) {
    console.log(`While Loop Iteration: ${j}`);
    j++;
}

// do-while loop
let k = 1;
do {
    console.log(`Do-While Loop Iteration: ${k}`);
    k++;
} while (k <= 5);

// for...of loop (for arrays)
let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
    console.log(`Color: ${color}`);
}

// for...in loop (for objects)
let person = { name: "Alice", age: 30, city: "New York" };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// break and continue
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Breaking the loop at i = 5");
        break; // exit the loop
    }
    if (i % 2 === 0) {
        console.log(`Skipping even number: ${i}`);
        continue; // skip the rest of the loop for this iteration
    }
    console.log(`Current number: ${i}`);
}

// Nested loops
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(`Outer Loop: ${i}, Inner Loop: ${j}`);
    }
}

// Infinite loop example (commented out to prevent actual infinite loop)
// while (true) {
//     console.log("This will run forever unless stopped");
// }

// Note: Be cautious with infinite loops as they can crash your program or browser.

// Looping through a string
let str = "Hello";
for (let char of str) {
    console.log(`Character: ${char}`);
}

// Looping through a Set
let mySet = new Set([1, 2, 3]);
for (let item of mySet) {
    console.log(`Set item: ${item}`);
}

// Looping through a Map
let myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);
for (let [key, value] of myMap) {
    console.log(`Map key: ${key}, value: ${value}`);
}

// Labeled loops
outerLoop: for (let i = 1; i <= 3; i++) {
    innerLoop: for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            console.log("Breaking out of both loops");
            break outerLoop; // breaks out of the outer loop
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}

// Looping with index
let fruits = ["Apple", "Banana", "Cherry"];
for (let index in fruits) {
    console.log(`Index: ${index}, Fruit: ${fruits[index]}`);
}

// Using Array methods for looping
fruits.forEach((fruit, index) => {
    console.log(`Fruit at index ${index}: ${fruit}`);
});

// Using map to create a new array
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Uppercase Fruits:", upperFruits);