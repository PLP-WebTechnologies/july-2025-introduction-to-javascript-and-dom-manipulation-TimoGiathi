// Part 1: Variables, Data Types, Operators, Conditionals (with user input)
const outputDiv = document.getElementById("output");
const submitBtn = document.getElementById("submitBtn");
const nameInput = document.getElementById("nameInput");
const scoreInput = document.getElementById("scoreInput");

submitBtn.addEventListener("click", function () {
  let userName = nameInput.value.trim();
  let score = Number(scoreInput.value);
  let passed = score >= 50;
  if (userName === "" || isNaN(score)) {
    outputDiv.textContent = "Please enter a valid name and score.";
    return;
  }
  if (passed) {
    outputDiv.textContent = `Welcome, ${userName}! You passed with a score of ${score}.`;
  } else {
    outputDiv.textContent = `Sorry, ${userName}. You did not pass.`;
  }
});

// Part 2: Custom Functions
function calculateTotal(arr) {
  // Returns the sum of array elements
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
}

function formatGreeting(name) {
  return `Hello, ${name}!`;
}

// Display function results
console.log(calculateTotal([10, 20, 30]));
console.log(formatGreeting("JavaScript Learner"));

// Part 3: Loops
// Example 1: for loop
for (let i = 1; i <= 5; i++) {
  console.log(`Counting: ${i}`);
}
// Example 2: forEach loop
["apple", "banana", "cherry"].forEach(function (fruit) {
  console.log(`Fruit: ${fruit}`);
});

// Part 4: DOM Interactions
// 1. Change text content
outputDiv.textContent += "Pending input...";

// 2. Toggle message on button click
const toggleBtn = document.getElementById("toggleBtn");
let showMessage = true;
toggleBtn.addEventListener("click", function () {
  showMessage = !showMessage;
  outputDiv.textContent = showMessage
    ? "Message is visible!"
    : "Message is hidden!";
});

// 3. Create list items dynamically
const list = document.getElementById("list");
const items = ["Learn JS", "Practice Loops", "Master DOM"];
for (let item of items) {
  const li = document.createElement("li");
  li.textContent = item;
  list.appendChild(li);
}
