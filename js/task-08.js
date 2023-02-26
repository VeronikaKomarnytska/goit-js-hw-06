

const formRef = document.querySelector(".login-form");
console.log(formRef);

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  // console.log(event);
  event.preventDefault();
  // console.dir(event.currentTarget);

  const formElementsRef = event.currentTarget.elements;
  // console.dir(formElementsRef);
  const email = formElementsRef.email.value;
  console.log(email);
  const password = formElementsRef.password.value;

  if (email === "" || password === "") {
    return alert("Просимо заповнити всі поля фоми");
  }

  const objectData = {
    email,
    password,
  };
  console.log(objectData);
  event.currentTarget.reset();
}
