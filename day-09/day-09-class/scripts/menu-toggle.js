// Main Navigation Toggle
const button = document.getElementById("main-nav-button");
const links = document.getElementById("main-nav-list");

button.addEventListener("click", function () {
  links.classList.toggle("toggled");
});
// Thumb Navigation Toggle
const thumbButton = document.getElementById("thumb-nav-button");
const thumbList = document.getElementById("thumb-nav-secondary");

thumbButton.addEventListener("click", function () {
  thumbList.classList.toggle("toggled");
});
