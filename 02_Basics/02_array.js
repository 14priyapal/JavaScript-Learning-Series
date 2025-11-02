let dc_heros = ["Batman", "Superman", " Flash", "Wonder Woman"];
let marvel_heros = ["Spiderman", "Ironman", "Hulk", "Thor"];

// you can you concat and spread operator to merge two arrays
let all_heros = dc_heros.concat(marvel_heros);
console.log(all_heros);

// or using spread operator
let all_heros_spread = [...dc_heros, ...marvel_heros];
console.log(all_heros_spread);

// flattening an array of arrays
let array_of_arrays = [[1, 2], [3, 4], [5, 6]];
let flattened_array = array_of_arrays.flat();
console.log(flattened_array); // [1, 2, 3, 4, 5, 6]

// Array.of() - creates a new array instance with a variable number of arguments, regardless of number or type of the arguments.
let array_of_numbers = Array.of(7, 8, 9);
console.log(array_of_numbers); // [7, 8, 9]
