console.clear();

const saveButton = document.querySelector('[data-js="save-button"]');
const cancelButton = document.querySelector('[data-js="cancel-button"]');
const restoreButton = document.querySelector('[data-js="restore-button"]');
const skipButton = document.querySelector('[data-js="skip-button"]');
const buttonContainer = document.querySelector(
  '[data-js="custom-button-container"]'
);

// Callback Functions
// Argument of another function

saveButton.addEventListener("click", () => {
  console.log("handle save");
});

function handleCancel() {
  console.log("handle cancel");
}

cancelButton.addEventListener("click", handleCancel);

restoreButton.addEventListener("click", (event) => {
  console.log("handle restore");
  console.log(event);
});

function handleSkip(event) {
  console.log("handle skip");
  console.log(event);
}

skipButton.addEventListener("click", handleSkip);

// button component

function Button(text, callback) {
  const buttonElement = document.createElement("button");
  buttonElement.textContent = text;
  buttonElement.addEventListener("click", callback);
  return buttonElement;
}

const alertButton = Button("Some awesome text!", () => {
  alert("Hello World");
});

buttonContainer.append(alertButton);
