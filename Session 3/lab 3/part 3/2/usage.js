// Create an initial array of fruits
let fruits = ["apple", "banana", "orange"];

// 1. push() - Add a fruit to the end
fruits.push("mango"); // Adds "mango" to the array

// 2. pop() - Remove the last fruit
let lastFruit = fruits.pop(); // Removes "mango"

// 3. shift() - Remove the first fruit
let firstFruit = fruits.shift(); // Removes "apple"

// 4. unshift() - Add a fruit to the beginning
fruits.unshift("kiwi"); // Adds "kiwi" to the beginning

// 5. map() - Double the length of each fruit name
let fruitLengths = fruits.map(fruit => fruit.length * 2); // Creates a new array with doubled lengths

// 6. filter() - Filter out fruits with names shorter than 7 characters
let longNamedFruits = fruits.filter(fruit => fruit.length >= 7); // Filters fruits

// 7. reduce() - Sum the lengths of all fruit names
let totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0); // Sums up lengths

// 8. forEach() - Log each fruit
fruits.forEach(fruit => console.log(fruit)); // Logs each fruit name to the console

// 9. find() - Find the first fruit with a name longer than 5 characters
let longFruit = fruits.find(fruit => fruit.length > 5); // Finds the first long-named fruit

// 10. slice() - Get a copy of the array with only the first two fruits
let firstTwoFruits = fruits.slice(0, 2); // Slices the first two elements