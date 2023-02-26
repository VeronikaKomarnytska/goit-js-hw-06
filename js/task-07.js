const inputFontSizeControlRef = document.querySelector('#font-size-control');
console.log(inputFontSizeControlRef);

const textRef = document.querySelector('#text');
console.log(textRef);

inputFontSizeControlRef.addEventListener('input', (event) => {

textRef.style.fontSize = event.currentTarget.value + 'px';
})