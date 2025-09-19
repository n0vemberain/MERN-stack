// what is the difference between == and === in javascript?
// == checks for value equality with type coercion
// === checks for both value and type equality without type coercion

console.log(5 == '5');  // true.   not checking type
console.log(5 === '5'); // false.   checking type


// conditionals in js 
let age = 18;

if (age > 18) {
    console.log("You are an adult");
} else if (age === 18) {
    console.log("You are just an adult");
} else {
    console.log("You are a minor");
}

// switch case
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(`The day is: ${dayName}`);

// ternary operator
let isMember = true;
let discount = isMember ? 0.1 : 0.05; // 10% discount for members, 5% for non-members
console.log(`Your discount is: ${discount * 100}%`);    




// if else

let num = 10;

if (num % 2 === 0) {
    console.log(`${num} is even`);
} else {
    console.log(`${num} is odd`);
}