const inputFontSizeControlRef = document.querySelector("#font-size-control");
console.log(inputFontSizeControlRef);

const textRef = document.querySelector("#text");
console.log(textRef);

inputFontSizeControlRef.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value;
  textRef.style.fontSize = `${inputValue}px`;
});
