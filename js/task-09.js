function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
// console.log(bodyRef);

const magicButtonRef = document.querySelector('.change-color');
// console.log(magicButtonRef);

const colorInTextFormatRef = document.querySelector('.color');
// console.log(colorInTextFormatRef.textContent);
  
magicButtonRef.addEventListener('click', (event => {
  // console.log('Change color');
  bodyRef.style.backgroundColor = getRandomHexColor();
   colorInTextFormatRef.textContent = bodyRef.style.backgroundColor;
}));
