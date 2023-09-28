const ulCategories = document.querySelectorAll("ul#categories li.item");
const li = document.querySelector(".item");
console.log(`${ulCategories.length}`);
ulCategories.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.innerText}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});

/*

const categoriesUl = document.querySelectorAll("ul#categories li.item");
console.log(categoriesUl);
console.log(`Number of categories: ${categoriesUl.length}`);
categoriesUl.forEach((element) => {
  const name = element.firstElementChild;
  console.log(`Category: ${name.innerText}`);
  const number = element.lastElementChild;

  console.log(`Elements: ${number.children.length}`);
});
*/
