const nameIn = document.querySelector("#name-input");
const noName = document.querySelector("#name-output");
nameIn.addEventListener("input", (event) => {
  const name = event.target.value;
  if (name === " ") {
    noName.textContent = "Anonymous";
  } else {
    noName.textContent = name;
  }
});
