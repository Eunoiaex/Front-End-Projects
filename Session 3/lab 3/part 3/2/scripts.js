let fruits = [];

const arrayOutput = document.getElementById("arrayOutput");
const arrayInput = document.getElementById("arrayInput");
const setArrayBtn = document.getElementById("setArrayBtn");

function updateOutput() {
    arrayOutput.textContent = JSON.stringify(fruits);
}

setArrayBtn.addEventListener("click", () => {
    const userInput = arrayInput.value.trim();
    fruits = userInput ? userInput.split(',').map(item => item.trim()) : [];
    updateOutput();
});

document.getElementById("pushBtn").addEventListener("click", () => {
    const newItem = prompt("Enter an item to push:");
    if (newItem) {
        fruits.push(newItem);
        updateOutput();
    }
});

document.getElementById("popBtn").addEventListener("click", () => {
    const poppedItem = fruits.pop();
    alert(`Popped item: ${poppedItem}`);
    updateOutput();
});

document.getElementById("shiftBtn").addEventListener("click", () => {
    const shiftedItem = fruits.shift();
    alert(`Shifted item: ${shiftedItem}`);
    updateOutput();
});

document.getElementById("unshiftBtn").addEventListener("click", () => {
    const newItem = prompt("Enter an item to unshift:");
    if (newItem) {
        fruits.unshift(newItem);
        updateOutput();
    }
});

document.getElementById("mapBtn").addEventListener("click", () => {
    if (fruits.every(fruit => typeof fruit === 'string')) {
        fruits = fruits.map(fruit => fruit.toUpperCase());
        alert("Converted all items to uppercase.");
    } else {
        alert("Map operation requires all elements to be strings.");
    }
    updateOutput();
});

document.getElementById("filterBtn").addEventListener("click", () => {
    const minLength = prompt("Filter items with a minimum length of:");
    if (minLength !== null && !isNaN(minLength)) {
        fruits = fruits.filter(fruit => fruit.length >= Number(minLength));
        updateOutput();
    }
});

document.getElementById("reduceBtn").addEventListener("click", () => {
    const totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
    alert(`Total length of all items: ${totalLength}`);
    updateOutput();
});

document.getElementById("forEachBtn").addEventListener("click", () => {
    let concatenated = "";
    fruits.forEach((fruit, index) => {
        concatenated += index < fruits.length - 1 ? fruit + ", " : fruit;
    });
    alert(`Concatenated items: ${concatenated}`);
    updateOutput();
});

document.getElementById("findBtn").addEventListener("click", () => {
    const item = fruits.find(fruit => fruit.length > 5);
    alert(`First item longer than 5 characters: ${item || "None"}`);
    updateOutput();
});

document.getElementById("sliceBtn").addEventListener("click", () => {
    const start = prompt("Enter the start index for slice:");
    const end = prompt("Enter the end index for slice:");
    const slicedArray = fruits.slice(Number(start), Number(end));
    alert(`Sliced array: ${JSON.stringify(slicedArray)}`);
    updateOutput();
});