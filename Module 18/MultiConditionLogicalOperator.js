// Multiple conditional Logical Operator
let age = 25;

if (age > 18 && age < 65) {
    console.log("You are an adult but not a senior citizen");
} else if (age <= 18 || age >= 65) {
    console.log("You are either a minor or a senior citizen");
} else {
    console.log("Invalid age");
}