// Function to close the popup when pressing ESC
function handleEscPopup(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
  }
}

// Function to open the popup
function openPopup(popUp) {
  popUp.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleEscPopup);
}

// Function to close the popup
function closePopup(popUp) {
  popUp.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleEscPopup);
}

export { openPopup, closePopup, handleEscPopup };
