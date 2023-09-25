const div = document.querySelector("#counter");
console.log(div);
const value = document.querySelector("#value");
const buttonUp = document.querySelector(
  '#counter button[data-action="increment"]'
);
const buttonDown = document.querySelector(
  '#counter button[data-action="decrement"]'
);
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
  value.textContent = counterValue;
}

buttonUp.addEventListener("click", increment);
buttonDown.addEventListener("click", decrement);
updateValue();
