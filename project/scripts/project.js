const contactSection = document.querySelector(".section-contact");
const helloIvan = document.querySelector(".page-header h1");

let isContactAnimated = false;
let isHelloIvanAnimated = false;

window.addEventListener("wheel", function (e) {
  if (e.deltaY > 0 && !isHelloIvanAnimated) {
    isHelloIvanAnimated = true;

    helloIvan.style.animation = "moveUp 1s forwards";

    helloIvan.addEventListener("animationend", function () {
      helloIvan.style.animation = "";
      isHelloIvanAnimated = false;
    });
  } else if (e.deltaY < 0 && !isContactAnimated) {
    isContactAnimated = true;

    contactSection.style.animation = "moveDown 1s forwards";

    contactSection.addEventListener("animationend", function () {
      contactSection.style.animation = "";
      isContactAnimated = false;
    });
  }
});
