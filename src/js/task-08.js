const form = document.querySelector("form .login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.target.value;
  const password = event.target.value;
  if (email === "") {
    return alert("Toate campurile trebuie completate");
  } else if (password === "") {
    return alert("Toate campurile trebuie completate");
  } else {
    return;
  }
});
