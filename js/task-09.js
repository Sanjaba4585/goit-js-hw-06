function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnEl = document.querySelector(".change-color");
const textColor = document.querySelector(".color");
const chengeBodyColor = document.querySelector("body");

const makeChangeColor = (color) => {
  textColor.textContent = getRandomHexColor(color);
  chengeBodyColor.style.backgroundColor = textColor.textContent;
};

btnEl.addEventListener("click", makeChangeColor);
