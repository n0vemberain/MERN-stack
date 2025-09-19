// Multi Level If Else conditions 
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// Nested if else
let num = 15;

if (num > 0) {
    if (num % 2 === 0) {
        console.log(`${num} is a positive even number`);
    } else {
        console.log(`${num} is a positive odd number`);
    }
} else if (num < 0) {
    console.log(`${num} is a negative number`);
} else {
    console.log("The number is zero");
}

// Ternary operator with multiple conditions
// explaining nested ternary operator :
let temperature = 75;
let weather = temperature > 85 ? "Hot" : temperature >= 60 ? "Warm" : "Cold";
console.log(`The weather is: ${weather}`);