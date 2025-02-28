// Function that adds an error class
function showInputError(formElement, inputElement, errorMessage, validationSettings) {
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  inputElement.classList.add(validationSettings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationSettings.errorClass);
}

// Function that removes the error class
function hideInputError(formElement, inputElement, validationSettings) {
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  inputElement.classList.remove(validationSettings.inputErrorClass);
  errorElement.classList.remove(validationSettings.errorClass);
  errorElement.textContent = '';
}

// Function that takes an array of input fields
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

// Function that takes an array of input fields
// and a button element whose state needs to be changed
function toggleButtonState(inputList, buttonElement, validationSettings) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationSettings.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(validationSettings.inactiveButtonClass);
    buttonElement.removeAttribute('disabled', true);
  }
}

// Function to check if an input field is valid
function isValid(formElement, inputElement, validationSettings) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationSettings);
  } else {
    hideInputError(formElement, inputElement, validationSettings);
  }
}

// Event handler function for input changes that updates button state
function setEventListeners(formElement, validationSettings) {
  const formElements = formElement.querySelectorAll(validationSettings.inputSelector);
  const inputList = Array.from(formElements);
  const buttonElement = formElement.querySelector(validationSettings.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, validationSettings);
      toggleButtonState(inputList, buttonElement, validationSettings);
    });
  });
  toggleButtonState(inputList, buttonElement, validationSettings);
}

// Function to validate all forms
function enableValidation(validationSettings) {
  const formList = Array.from(document.querySelectorAll(validationSettings.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, validationSettings);
  });
}

export { enableValidation };
