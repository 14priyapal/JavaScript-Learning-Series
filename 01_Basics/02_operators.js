// difference between == and ===
console.log(5 == '5');  // true, because values are equal after type coercion
console.log(5 === '5'); // false, because types are different

// arithmetic operators
let a = 10;
let b = 3;

console.log(a + b); // addition: 13
console.log(a - b); // subtraction: 7
console.log(a * b); // multiplication: 30
console.log(a / b); // division: 3.3333...
console.log(a % b); // modulus: 1 (remainder of 10 divided by 3)
console.log(a ** b); // exponentiation: 1000 (10 to the power of 3)

// assignment operators
let c = 5;
c += 2; // equivalent to c = c + 2
console.log(c); // 7
c *= 3; // equivalent to c = c * 3
console.log(c); // 21

// logical operators
let x = true;
let y = false;

console.log(x && y); // logical AND: false
console.log(x || y); // logical OR: true
console.log(!x);     // logical NOT: false

// increment and decrement operators
let count = 0;
console.log(++count); // pre-increment: 1
console.log(count++); // post-increment: 1 (but count becomes 2 after this line)
console.log(count);   // 2
console.log(--count); // pre-decrement: 1
console.log(count--); // post-decrement: 1 (but count becomes 0 after this line)
console.log(count);   // 0

console.log("------------------------------");
