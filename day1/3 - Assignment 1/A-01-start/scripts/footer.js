// Get the footer element
const footer = document.querySelector("footer");
// Get the current year
const year = new Date().getFullYear();
// Change the footer content to say "Copyright <year> Randy Gulak" with the copyright symbol
footer.innerHTML = `&copy; ${year} Randy Gulak`;
