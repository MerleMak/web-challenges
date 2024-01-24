const button = document.querySelector("[data-js='button']");
const text = document.querySelector("[data-js='text']");

button.addEventListener("click", () => {
  checkInputLength();
});

function checkInputLength() {
  const inputValue = document.querySelector("[data-js='textInput']").value;
  if (inputValue.length > 3) {
    text.textContent = "you typed more than 3 characters";
    return;
  } else {
    text.textContent = "you typed 3 or less than 3 characters";
  }
}
