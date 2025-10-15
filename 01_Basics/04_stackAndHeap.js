// stack and heap

// Stack
// - LIFO (Last In First Out)
// - Primitive data types are stored in the stack
// - Fast access
// - Limited size

// Heap
// - No order
// - Objects and functions are stored in the heap
// - Slower access
// - Larger size

// Example of stack
let a = 10; // 'a' is stored in the stack
let b = 20; // 'b' is stored in the stack
let c = a + b; // 'c' is stored in the stack

// Example of heap
let obj1 = { name: "Alice" }; // 'obj1' is stored in the heap
let obj2 = obj1; // 'obj2' references the same object in the heap

obj2.name = "Bob"; // Modifying 'obj2' also affects 'obj1'

console.log(obj1.name); // Output: Bob
console.log(obj2.name); // Output: Bob

console.log("------------------------------");

// Note: Primitive data types (number, string, boolean, null, undefined, symbol) are stored in the stack.
// Non-primitive data types (objects, arrays, functions) are stored in the heap.

