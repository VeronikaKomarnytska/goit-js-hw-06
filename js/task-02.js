const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");

const markup = ingredients.map((ingredient) => {
  const ingredientsListRefs = document.createElement("li");
  ingredientsListRefs.textContent = ingredient;
  ingredientsListRefs.classList.add("item");
  return ingredientsListRefs;
});
listRef.append(...markup);
