// form validation

const email = document.getElementById("email");
const number = document.getElementById("number");
const fullname = document.getElementById("name");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const validNumber = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  const validFullName = /^[a-zA-Z']+([\s-][a-zA-Z']+)*$/;

  let isValid = true;

  if (!validEmail.test(email.value)) {
    document.getElementById("emailError").textContent = "enter a valid email ";
    document.getElementById("emailError").style ="display: block;"
    isValid = false;
  }
  if (!validNumber.test(number.value)) {
    document.getElementById("numberError").textContent =
      "enter a 10 digit number ";
    document.getElementById("numberError").style ="display: block;"
    isValid = false;
  }
  if (!validFullName.test(fullname.value)) {
    document.getElementById("nameError").textContent = "enter a valid name ";
    document.getElementById("nameError").style ="display: block;"
    isValid = false;
  }

  if (!isValid) {
    e.preventDefault();
  }
});
