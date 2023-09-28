const widget = document.querySelector("widget");
const backgroundColor = document.querySelector(".color");
const button = document.querySelector(".change-color");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
/*
function colorChange() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  button.textContent = color;
}

button.addEventListener("click", colorChange);
*/

button.addEventListener("click", () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;

  button.textContent = color;
});
