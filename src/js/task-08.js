document
  .querySelector(".login-form")
  .addEventListener("submit", function (event) {
    // Previne reîncărcarea paginii la trimiterea formularului
    event.preventDefault();
    // Accesează elementele din formular
    const elements = event.target.elements;
    // Obiectul în care se vor salva datele introduse
    let formData = {};
    // Verifică dacă toate câmpurile sunt completate
    let allFieldsFilled = true;
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].name && !elements[i].value) {
        allFieldsFilled = false;
        break;
      }
      if (elements[i].name) {
        formData[elements[i].name] = elements[i].value;
      }
    }
    if (!allFieldsFilled) {
      // Afișează alerta dacă unul dintre câmpuri este gol
      alert("Toate câmpurile trebuie completate!");
      return;
    }
    // Afișează obiectul cu datele introduse în consolă
    console.log(formData);
    // Șterge valorile câmpurilor din formular
    event.target.reset();
  });
