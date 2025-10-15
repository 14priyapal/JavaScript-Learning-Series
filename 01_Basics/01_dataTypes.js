/* there is two types of data types in javascript
1. Primitive data types
2. Non-primitive data types

Primitive data types:
1. Number
2. String
3. Boolean
4. Null
5. Undefined
6. Symbol (ES6)

Non-primitive data types:
1. Object
2. Array
3. Function

*/
// 1. Number
let num1 = 10;
let num2 = 20.5;
console.log("Number data type:");
console.log("num1:", num1);             

console.log("num2:", num2);
console.log("Type of num1:", typeof num1); 
console.log("Type of num2:", typeof num2);
console.log("------------------------------");

// 2. String
let str1 = "Hello, World!";
let str2 = 'JavaScript is fun.';
console.log("String data type:");
console.log("str1:", str1);
console.log("str2:", str2);
console.log("Type of str1:", typeof str1);
console.log("Type of str2:", typeof str2);
console.log("------------------------------");

// 3. Boolean
let bool1 = true;
let bool2 = false;
console.log("Boolean data type:");
console.log("bool1:", bool1);
console.log("bool2:", bool2);
console.log("Type of bool1:", typeof bool1);
console.log("Type of bool2:", typeof bool2);
console.log("------------------------------");

// 4. Null
let nullVar = null;
console.log("Null data type:");
console.log("nullVar:", nullVar);
console.log("Type of nullVar:", typeof nullVar); // Note: this will return

// "object" due to a quirk in JavaScript
console.log("------------------------------");

// 5. Undefined
let undefVar;
console.log("Undefined data type:");


console.log("undefVar:", undefVar);

console.log("Type of undefVar:", typeof undefVar);
console.log("------------------------------");

// 6. Symbol (ES6)
let sym1 = Symbol('sym1');
let sym2 = Symbol('sym2');
console.log("Symbol data type:");
console.log("sym1:", sym1);
console.log("sym2:", sym2);
console.log("Type of sym1:", typeof sym1);
console.log("Type of sym2:", typeof sym2);
console.log("------------------------------");

// Non-primitive data types

// 1. Object
let obj = {
    name: "John",
    age: 30
};
console.log("Object data type:");
console.log("obj:", obj);
console.log("Type of obj:", typeof obj);
console.log("------------------------------");

// 2. Array
let arr = [1, 2, 3, 4, 5];
console.log("Array data type:");
console.log("arr:", arr);
console.log("Type of arr:", typeof arr); // Note: this will return "object"                     

console.log("------------------------------");  
// 3. Function
function greet() {
    return "Hello!";
}
console.log("Function data type:");
console.log("greet():", greet());
console.log("Type of greet:", typeof greet);
console.log("------------------------------");
// End of code

