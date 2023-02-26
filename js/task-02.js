const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients');
// console.log(listRef);

ingredients.forEach((ingredient) => {
  const ingredientsListRefs = document.createElement('li');
  ingredientsListRefs.textContent = ingredient;
  ingredientsListRefs.classList.add('item');
  listRef.appendChild(ingredientsListRefs);
})
console.log(listRef); 