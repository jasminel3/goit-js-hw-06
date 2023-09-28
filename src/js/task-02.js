// Scrieți un script care pentru fiecare element al matricei ingredients:

// Va crea un element <li> separat. Asigurați-vă că folosiți metoda document.createElement().
// Adăugați numele ingredientului ca conținut text.
// Adăugați clasa item la element.
// Apoi va insera toate elementele <li> dintr-o singură operație în lista ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((element) => {
  const li = document.createElement("li");
  li.textContent = element;
  li.classList.add("item");
  ingredientsList.append(li);
});

// const ul = document.querySelector("#ingredients");
// console.log(ul);
// ingredients.forEach((element) => {
//   const liEl = document.createElement("li");
//   liEl.innerText = element;
//   liEl.classList.add("item");
//   ul.append(liEl);
// });
// console.log(ul);
