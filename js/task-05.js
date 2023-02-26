const inputRef = document.querySelector('#name-input');
// console.log(inputRef);

const outputNameRef = document.querySelector('#name-output');
// console.log(outputNameRef);

inputRef.addEventListener("input", (event) => {
  outputNameRef.textContent = event.currentTarget.value;
});