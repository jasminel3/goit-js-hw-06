const input = document.querySelector("#validation-input");
input.addEventListener("blur", () => {
  const data = input.getAttribute("data-length");
  if (input.value.length >= data.valueOf(data)) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
});
