const inputWithValidationRef = document.querySelector("#validation-input");
// console.log(inputWithValidationRef);
//  console.log(inputWithValidationRef.dataset.length);

inputWithValidationRef.addEventListener("blur", (event) => {
  if (
    event.currentTarget.value.length === Number(inputWithValidationRef.dataset.length)
  ) {
    validInputRef();
  } else {
    invalidInputRef();
  }
});
function validInputRef() {
  inputWithValidationRef.classList.add("valid");
  inputWithValidationRef.classList.remove("invalid");
}
function invalidInputRef() {
  inputWithValidationRef.classList.add("invalid");
  inputWithValidationRef.classList.remove("valid");
}
