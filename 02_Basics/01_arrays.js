/* 
1. Arrays are used to store multiple values in a single variable.
Arrays can hold values of different types, including numbers, strings, and even other arrays.
Arrays are mutable, meaning their contents can be changed after they are created.

deep and shallow copy:-
shallow copy in JavaScript can be created using methods like `slice()`, `concat()`, or the spread operator (`...`). A shallow copy means that the new array contains references to the same objects as the original array, rather than copies of those objects.
deep copy can be created using methods like `JSON.parse(JSON.stringify(array))` or libraries like Lodash's `_.cloneDeep()`. A deep copy means that all objects are copied recursively, so the new array is completely independent of the original array.
*/


const myArr = [1,2,3,4,5];
const myHero = ["Spiderman", "Ironman"];

const myArr2 = new Array(6,7,8,9,10); // another way to create an array
console.log(myArr2[3]);


// Array Methods

// push() - adds one or more elements to the end of an array and returns the new length of the array.
myArr.push(6);
console.log(myArr); // [1, 2, 3, 4, 5, 6]

// pop() - removes the last element from an array and returns that element.
const lastElement = myArr.pop();
console.log(lastElement); // 6
console.log(myArr); // [1, 2, 3, 4, 5]

// shift() - removes the first element from an array and returns that element.
const firstElement = myArr.shift();
console.log(firstElement); // 1
console.log(myArr); // [2, 3, 4, 5]

// unshift() - adds one or more elements to the beginning of an array and returns the new length of the array.
myArr.unshift(0);
console.log(myArr); // [0, 2, 3, 4, 5]

// indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present.
const index = myArr.indexOf(3);
console.log(index); // 2

// slice() - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
const newArr = myArr.slice(1, 4);
console.log(newArr); // [2, 3, 4]

// splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
myArr.splice(1, 2, 'a', 'b'); // removes 2 elements at index 1 and adds 'a' and 'b'
console.log(myArr); // [0, 'a', 'b', 4, 5]

// forEach() - executes a provided function once for each array element.
myArr.forEach((element) => {
    console.log(element);
});
// Output:
// 0
// 'a'
// 'b'
// 4
// 5

// map() - creates a new array populated with the results of calling a provided function on every element in the calling array.
const mappedArr = myArr.map((element) => {
    return element + 1;
});
console.log(mappedArr); // [1, 'a1', 'b1', 5, 6]

// filter() - creates a new array with all elements that pass the test implemented by the provided function.
const filteredArr = myArr.filter((element) => {
    return typeof element === 'number';
});
console.log(filteredArr); // [0, 4, 5]

// reduce() - executes a reducer function on each element of the array, resulting in a single output value.
const sum = filteredArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum); // 9          
// Note: 'a' and 'b' were excluded from the sum since they are not numbers.     

// Finding an element in an array of objects
const users = [
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 30},
    {name: 'Charlie', age: 35}
];

const user = users.find((user) => user.name === 'Bob');
console.log(user); // {name: 'Bob', age: 30}

// Checking if an array includes a certain element
const hasAlice = users.some((user) => user.name === 'Alice');
console.log(hasAlice); // true

// Creating a shallow copy of an array
const shallowCopy = myArr.slice();
console.log(shallowCopy); // [0, 'a', 'b', 4, 5]

// Creating a deep copy of an array (only works for arrays with serializable elements)
const deepCopy = JSON.parse(JSON.stringify(users));
console.log(deepCopy); // [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}, {name: 'Charlie', age: 35}]

// join() - joins all elements of an array into a string.
const joinedString = myHero.join(", ");
console.log(joinedString); // "Spiderman, Ironman"

// concat() - merges two or more arrays and returns a new array.
const combinedArr = myArr.concat(myArr2);
console.log(combinedArr); // [0, 'a', 'b', 4, 5, 6, 7, 8, 9, 10]

// reverse() - reverses the order of the elements in an array.
myArr.reverse();
console.log(myArr); // [5, 4, 'b', 'a', 0]

// sort() - sorts the elements of an array in place and returns the sorted array.
myArr2.sort((a, b) => b - a); // sorting in descending order
console.log(myArr2); // [10, 9, 8, 7, 6]

// length - property that returns the number of elements in an array.
console.log(myArr.length); // 5
console.log(myHero.length); // 2        

// slice vs splice:
// - slice() does not modify the original array and returns a new array containing the selected elements.
// - splice() modifies the original array by removing or replacing elements and can also add new elements.
// 
// Example:
const arrExample = [1, 2, 3, 4, 5];
const slicedArr = arrExample.slice(1, 4); // [2, 3, 4]
console.log(arrExample); // [1, 2, 3, 4, 5] (original array remains unchanged)

arrExample.splice(1, 2, 'x', 'y'); // removes 2 elements at index 1 and adds 'x' and 'y'
console.log(arrExample); // [1, 'x', 'y', 4, 5] (original array is modified)    
