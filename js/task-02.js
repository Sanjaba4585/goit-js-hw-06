const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

// const elements = ingredients.map((option) => {
//   const titleEl = document.createElement("li");
//   titleEl.classList.add("item");
//   titleEl.textContent = option;
//   return titleEl;
// });
const ingredientsEl = document.querySelector("ul#ingredients");
const makeIngredientsOptions = (options) => {
  return options.map((option) => {
    const titleEl = document.createElement("li");
    titleEl.classList.add("item");
    titleEl.textContent = option;
    return titleEl;
  });
};
const elements = makeIngredientsOptions(ingredients);
ingredientsEl.append(...elements);
