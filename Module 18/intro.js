// comparison operators
console.log(3 > 2);
console.log(3 >= 2);
console.log(3 < 2);
console.log(3 <= 2);
console.log(3 == 2);
console.log(3 != 2);

// strict comparison operators
console.log(3 === 2);
console.log(3 !== 2);

// comparison with different types
console.log('3' > 2);
console.log('03' == 3);
console.log(false == 0);
console.log(false === 0);

// chained comparisons
console.log(3 > 2 > 1); // (3 > 2) > 1 -> true > 1 -> 1 > 1 -> false
console.log(3 > 2 >= 1); // (3 > 2) >= 1 -> true >= 1 -> 1 >= 1 -> true

// special cases with null and undefined
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false

// string comparison
console.log('apple' > 'pineapple'); // false
console.log('2' > '12'); // true
console.log('2' < '12'); // false

// comparison of objects
const obj1 = { name: 'Alice' };
const obj2 = { name: 'Alice' };
console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false