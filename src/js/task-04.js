const counter = document.querySelector("#counter");
const plusOne = document.querySelector(
  '#counter button[data-action="increment"]'
);
const minusOne = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const middleCounter = document.querySelector("#value");
let counterValue = 0;

function increment() {
  counterValue++;
  updateValue();
}

function decrement() {
  counterValue--;
  updateValue();
}
function updateValue() {
  middleCounter.textContent = counterValue;
}

plusOne.addEventListener("click", increment);
minusOne.addEventListener("click", decrement);
updateValue();
