/* Numbers and Math in JavaScript
JavaScript has a single number type, which is a double-precision 64-bit binary format IEEE 754 value (same as Java's double). This means that both integers and floating-point numbers are represented as the same type.

Key Points:
1. All numbers in JavaScript are floating-point values.
2. JavaScript supports basic arithmetic operations: addition (+), subtraction (-), multiplication (*), division (/), modulus (%), and exponentiation (**).
3. Special numeric values include Infinity, -Infinity, and NaN (Not-a-Number).
4. The Math object provides properties and methods for mathematical constants and functions.


*/

const score = 400
console.log("Score:", score);
console.log("Type of score:", typeof score); // number

const balance = new Number(1000);
console.log("Balance:", balance);
console.log("Type of balance:", typeof balance); // object

console.log("------------------------------");

// toPrecision method its always returns a string
let num = 123.456789;
console.log("Original number:", num); // 123.456789
console.log("toPrecision(4):", num.toPrecision(4)); // 123.5
console.log("toPrecision(6):", num.toPrecision(6)); // 123.457
console.log("toPrecision(10):", num.toPrecision(10)); // 123.4567890
console.log(typeof num.toPrecision(10)); // string

console.log("------------------------------");

// toFixed method its always returns a string
let price = 49.99;
console.log("Original price:", price);  // 49.99
console.log("toFixed(0):", price.toFixed(0)); // "50"
console.log("toFixed(2):", price.toFixed(2)); // "49.99"
console.log("toFixed(4):", price.toFixed(4)); // "49.9900"
console.log(typeof price.toFixed(2)); // string

// toString method
let quantity = 150;
console.log("Original quantity:", quantity); // 150
console.log("toString():", quantity.toString()); // "150"
console.log("toString(2):", quantity.toString(2)); // "10010110" (binary representation)
console.log("toString(8):", quantity.toString(8)); // "226" (octal representation)
console.log("toString(16):", quantity.toString(16)); // "96" (hexadecimal representation)
console.log(typeof quantity.toString()); // string

console.log("------------------------------");

// toLocaleString method
let largeNumber = 1234567.89;
console.log("Original large number:", largeNumber); // 1234567.89
console.log("toLocaleString():", largeNumber.toLocaleString()); // "1,234,567.89" (in en-US locale)
console.log("toLocaleString('en-IN'):", largeNumber.toLocaleString('en_IN')); // "1.234.567,89" (in indian loacle)
console.log("toLocaleString('de-DE'):", largeNumber.toLocaleString('de-DE')); // "1.234.567,89" (in de-DE locale)
console.log(typeof largeNumber.toLocaleString()); // string

console.log("------------------------------");

// math library
console.log("Math.PI:", Math.PI);
console.log("Math.E:", Math.E);
console.log("Math.SQRT2:", Math.SQRT2);
console.log("Math.SQRT1_2:", Math.SQRT1_2);
console.log("Math.LN2:", Math.LN2);
console.log("Math.LN10:", Math.LN10);
console.log("Math.LOG2E:", Math.LOG2E);
console.log("Math.LOG10E:", Math.LOG10E);

console.log("------------------------------");

// math methods
let x = 7.25;
console.log("x:", x);
console.log("Math.round(x):", Math.round(x)); // 7
console.log("Math.floor(x):", Math.floor(x)); // 7
console.log("Math.ceil(x):", Math.ceil(x));   // 8
console.log("Math.trunc(x):", Math.trunc(x)); // 7

let y = -7.25;
console.log("y:", y);
console.log("Math.round(y):", Math.round(y)); // -7
console.log("Math.floor(y):", Math.floor(y)); // -8
console.log("Math.ceil(y):", Math.ceil(y));   // -7
console.log("Math.trunc(y):", Math.trunc(y)); // -7

console.log("------------------------------");

console.log("Math.pow(2, 3):", Math.pow(2, 3)); // 8
console.log("Math.sqrt(16):", Math.sqrt(16));   // 4
console.log("Math.cbrt(27):", Math.cbrt(27));   // 3
console.log("Math.abs(-10):", Math.abs(-10));   // 10
console.log("Math.min(3, 1, 4, 1, 5):", Math.min(3, 1, 4, 1, 5)); // 1
console.log("Math.max(3, 1, 4, 1, 5):", Math.max(3, 1, 4, 1, 5)); // 5
console.log("Math.random():", Math.random()); // random number between 0 and 1

console.log("------------------------------");

// generating a random integer between two values (inclusive)
console.log(Math.random())
console.log("Random integer between 1 and 10:", Math.floor(Math.random() * 10) + 1);
console.log("Random integer between 20 and 30:", Math.floor(Math.random() * 11) + 20); // (max - min + 1) + min        
console.log("Random integer between 100 and 200:", Math.floor(Math.random() * 101) + 100); // (max - min + 1) + min

console.log("------------------------------");

// Note: For more Math methods, you can refer to the MDN documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
console.log("------------------------------");
console.log("End of nums_and_math.js");
