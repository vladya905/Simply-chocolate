const refs = {
  openModalBtns: document.querySelectorAll('[data-buynow-open]'),
  closeModalBtn: document.querySelector('[data-buynow-close]'),
  modal: document.querySelector('.modal-buynow'),
  backdrop: document.querySelector('[data-buynow-backdrop]'),
};

refs.openModalBtns.forEach(btn => {
  btn.addEventListener('click', toggleModal);
});

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