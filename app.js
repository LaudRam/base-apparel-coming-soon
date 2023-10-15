const checkInput = document.querySelector("#input-email");

function handleSubmit(event) {
  event.preventDefault();
  const errorMessage = document.querySelector(".error-msg");
  const errorIcon = document.querySelector(".error-icon");
  const isValid = event.target.checkValidity();

  if (isValid === false) {
    errorMessage.classList.remove("hidden");
    errorIcon.classList.remove("hidden");
    checkInput.classList.add("error-input");
  } else {
    errorMessage.classList.add("hidden");
    errorIcon.classList.add("hidden");
  }
}
checkInput.addEventListener("change", handleSubmit);
