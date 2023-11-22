"use strict";

// 1. Create a variable, but don't assign a value yet
let namePrompt;
console.log("name variable value is: ", namePrompt);
// 2. Gather name from user, uncomment the line below
// namePrompt = prompt("What is your name?");
console.log("New name variable value is: ", namePrompt);
// 3. Get span by its ID using the document.getElementById method
let nameElem = document.getElementById("name");
// 4a. IF the prompt gave us a value we can use, change the text
// We can do that by checking if the name variable equals "Bob"
if (namePrompt === "Bob") {
  nameElem.innerText = namePrompt;
}
// 4b. IF the prompt equals null (if the user cancels), lets add an alert that says "You forgot to enter your name!"
if (namePrompt === null) {
  alert("You forgot to enter your name!");
  nameElem.innerText = "NOT BOB DETECTED";
}
// 4c. BONUS: How do we detect an empty string?

if (namePrompt === "") {
  alert("You forgot to enter your name!");
  nameElem.innerText = "NOT BOB DETECTED";
}
