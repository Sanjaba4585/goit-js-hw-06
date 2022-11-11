function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector("#boxes");
const controlsEl = document.querySelector("#controls");
const inputEl = controlsEl.querySelector("input");
const createBtnEl = controlsEl.querySelector("[data-create]");
const destroyBtnEL = controlsEl.querySelector("[data-destroy]");

function onClick() {
  const amount = inputEl.valueAsNumber;

  if (!amount) return;
  const markup = createBoxes(amount);
}
function createBoxes(amount) {
  const markup = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const element = `<div class="item" stile="height: ${size}px; width: ${size}px; background: ${getRandomHexColor()}"></div>`;
    markup.push(element);
    size += 10;
  }
  return markup.join("");
}
function addMarkup(markup = "") {
  boxesEl.innerHTML = markup;
}
createBtnEl.addEventListener("click", onClick);
destroyBtnEL.addEventListener("click", () => {
  addMarkup();
  inputEl.value = "";
});
