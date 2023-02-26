

const categoryRefs = document.querySelectorAll('.item');
// console.log(categoryRefs);

categoryRefs.textContent = `Number of categories: ${categoryRefs.length}`;
console.log(categoryRefs.textContent);


categoryRefs.forEach((categoryRef) => {
const firstChildRef = categoryRef.firstElementChild;
// console.log(firstChildRef);
console.log(`Category: ${firstChildRef.textContent}`);
const secondChildRef = categoryRef.lastElementChild;
// console.log(secondChildRef);
console.log(`Elements: ${secondChildRef.children.length}`);
})

