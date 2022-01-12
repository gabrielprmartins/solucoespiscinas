const buttonOpenModal = Array.from(
  document.querySelectorAll('[data-modal="open"]'),
);
const buttonCloseModal = document.querySelector('[data-modal="close"]');
const modalContainer = document.querySelector('[data-modal="container"]');
const activeClass = 'active';

const toggleModal = () => {
  modalContainer.classList.toggle(activeClass);
};

const outsideClickModal = ({ target }) => {
  if (target === modalContainer) {
    toggleModal();
  }
};

const eventToggleModal = (event) => {
  event.preventDefault();
  toggleModal();
};

const addModalEvents = () => {
  buttonOpenModal.forEach((button) => {
    button.addEventListener('click', eventToggleModal);
  });
  buttonCloseModal.addEventListener('click', eventToggleModal);
  modalContainer.addEventListener('click', outsideClickModal);
};

const initModal = () => {
  addModalEvents();
};

export { initModal };
