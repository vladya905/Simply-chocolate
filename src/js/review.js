const refs = {
  openModalBtn: document.querySelector('[data-review-open]'),
  closeModalBtn: document.querySelector('[data-review-close]'),
  modal: document.querySelector('[data-review]'),
  backdrop: document.querySelector('[data-review-backdrop]')
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.backdrop.addEventListener('click', onBackdropClick);
window.addEventListener('keydown', onEscKeyPress);


function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  refs.backdrop.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}

function onBackdropClick(event) {
  if (event.target === refs.backdrop) {
    toggleModal();
  }
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    if (!refs.modal.classList.contains('is-hidden')) {
      toggleModal();
    }
  }
}
