const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const length = input.getAttribute("data-length");
  const valueLength = length.valueOf(length);

  if (valueLength >= length) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
});
