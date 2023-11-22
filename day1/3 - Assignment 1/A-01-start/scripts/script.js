"use strict";

let loginButtonElem = document.getElementById("btn-log-in");
let logoutButtonElem = document.getElementById("btn-log-out");
let outputMessage = document.getElementById("output");

logoutButtonElem.style.display = "none"; // hide

loginButtonElem.addEventListener("click", () => {
  let nameElem = prompt("What is your name?");
  outputMessage.innerText = `Hello ${nameElem}. Click the button below to log out.`;
  loginButtonElem.style.display = "none"; // hide
  loginButtonElem.setAttribute("disabled", "disabled"); // disable
  logoutButtonElem.style.display = "block"; // show
  logoutButtonElem.removeAttribute("disabled"); // enable
});

logoutButtonElem.addEventListener("click", () => {
  let confirmElem = confirm("Are you sure?");
  if (confirmElem == true) {
    outputMessage.innerText =
      "You are now logged out. Click the login button to log in again.";
    logoutButtonElem.style.display = "none";
    logoutButtonElem.setAttribute("disabled", "disabled");
    loginButtonElem.style.display = "block";
    loginButtonElem.removeAttribute("disabled");
  } else {
    outputMessage.innerText =
      "You cancelled the log out. You are still logged in.";
  }
});
