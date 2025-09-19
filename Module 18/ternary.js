// Ternary with explanation
let isMember = true;
let discount = isMember ? 0.1 : 0.05; // 10% discount for members, 5% for non-members
console.log(`Your discount is: ${discount * 100}%`);

// Nested ternary operator
let temperature = 75;
let weather = temperature > 85 ? "Hot" : temperature >= 60 ? "Warm" : "Cold";
console.log(`The weather is: ${weather}`);