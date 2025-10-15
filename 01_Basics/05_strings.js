// String in javaScript
// Strings are used to represent text and are enclosed in single quotes (' '), double quotes (" "), or backticks (` `) for template literals.

let singleQuoteStr = 'This is a string in single quotes.';
let doubleQuoteStr = "This is a string in double quotes.";
let templateLiteralStr = `This is a string in backticks, which allows for interpolation: ${singleQuoteStr}`;    
console.log(singleQuoteStr);
console.log(doubleQuoteStr);
console.log(templateLiteralStr);

// Common string methods
let sampleStr = "  Hello, JavaScript!  ";

console.log("Original String:", `"${sampleStr}"`);

// Length of the string
console.log("Length:", sampleStr.length); // 21

// Convert to uppercase
console.log("Uppercase:", sampleStr.toUpperCase()); // "  HELLO, JAVASCRIPT!  "

// Convert to lowercase
console.log("Lowercase:", sampleStr.toLowerCase()); // "  hello, javascript!  "

// Trim whitespace from both ends
console.log("Trimmed:", `"${sampleStr.trim()}"`); // "Hello, JavaScript!"

// Accessing characters by index
console.log("First character:", sampleStr[0]); // ' '
console.log("Fifth character:", sampleStr.charAt(4)); // 'o'

// Finding a substring
console.log("Index of 'Java':", sampleStr.indexOf("Java")); // 8

// Replacing a substring
console.log("Replace 'JavaScript' with 'World':", sampleStr.replace("JavaScript", "World")); // "  Hello, World!  "

// Splitting a string into an array
let wordsArray = sampleStr.trim().split(" ");
console.log("Split into words:", wordsArray); // ["Hello,", "JavaScript!"]

// Checking if a string includes a substring
console.log("Includes 'Hello':", sampleStr.includes("Hello")); // true
console.log("Includes 'Python':", sampleStr.includes("Python")); // false

console.log("------------------------------");
console.log("Type of sampleStr:", typeof sampleStr); // string

// Note: Strings are immutable in JavaScript, meaning once a string is created, it cannot be changed. Any operation that modifies a string will return a new string.
console.log("------------------------------");

// Template literals for multi-line strings and embedding expressions
let name = "Alice";
let age = 25;
let multiLineStr = `Hello, my name is ${name}.
I am ${age} years old.
Nice to meet you!`;

console.log(multiLineStr);

console.log("------------------------------");

// Escape sequences in strings
let escapeStr = "He said, \"It's a beautiful day!\"\nLet's enjoy it.";
console.log(escapeStr);

console.log("------------------------------");

// Note: For more string methods, you can refer to the MDN documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String               
console.log("------------------------------");

// Summary of string methods used:
// - length
// - toUpperCase()
// - toLowerCase()
// - trim()
// - charAt()
// - indexOf()
// - replace()
// - split()
// - includes()         
console.log("------------------------------");          
console.log("End of strings.js");       
