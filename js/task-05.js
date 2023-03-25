const inputRef = document.querySelector("#name-input");

const outputNameRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value;
  outputNameRef.textContent = inputValue !== "" ? inputValue : "Anonymous";
});
