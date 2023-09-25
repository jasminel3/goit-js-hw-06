const widget = document.querySelector(".widget");
const colorChange = document.querySelector(".change-color");
colorChange.addEventListener("click", function () {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorChange.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
