// Math needed for programming
// Give me some example code that uses Math functions in JavaScript

// Variables in js
var name = "20"; 
var n = parseInt(name);
let radius = 10;
const pi = Math.PI;

// Math functions
console.log("The value of pi is: " + pi);
console.log("The square root of 16 is: " + Math.sqrt(16));
console.log("The absolute value of -5 is: " + Math.abs(-5));
console.log("The value of 2 raised to the power of 3 is: " + Math.pow(2, 3));
console.log("A random number between 0 and 1: " + Math.random());

// Area of a circle
let area = pi * Math.pow(radius, 2);
console.log("The area of a circle with radius " + radius + " is: " + area);

// Rounding numbers
let num = 4.7;
console.log("The value of " + num + " rounded is: " + Math.round(num));
console.log("The value of " + num + " rounded down is: " + Math.floor(num));
console.log("The value of " + num + " rounded up is: " + Math.ceil(num));

// Max and Min
let numbers = [3, 7, 2, 9, 4];
console.log("The maximum value in the array is: " + Math.max(...numbers));
console.log("The minimum value in the array is: " + Math.min(...numbers));

// Trigonometric functions
let angle = 30; // degrees
let radians = angle * (pi / 180); // convert to radians
console.log("The sine of " + angle + " degrees is: " + Math.sin(radians));
console.log("The cosine of " + angle + " degrees is: " + Math.cos(radians));
console.log("The tangent of " + angle + " degrees is: " + Math.tan(radians));

// Logarithmic functions
console.log("The natural logarithm of e is: " + Math.log(Math.E));
console.log("The base 10 logarithm of 100 is: " + Math.log10(100));
console.log("The base 2 logarithm of 8 is: " + Math.log2(8));

// Exponential function
console.log("The value of e raised to the power of 2 is: " + Math.exp(2));
console.log("The value of e raised to the power of 3 is: " + Math.exp(3));
console.log("The value of e raised to the power of 4 is: " + Math.exp(4));
console.log("The value of e raised to the power of 5 is: " + Math.exp(5));