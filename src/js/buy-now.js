const refs = {
  thankBackdrop: document.querySelector('[data-thank-backdrop]'),
  thankModal: document.querySelector('[data-thank-modal]'),
  closeThankBtn: document.querySelector('[data-thank-close]'),
  openModalBtns: document.querySelectorAll('[data-buynow-open]'),
  closeModalBtn: document.querySelector('[data-buynow-close]'),
  modal: document.querySelector('.modal-buynow'),
  backdrop: document.querySelector('[data-buynow-backdrop]'),
  subBtn: document.querySelector('[data-sub]'),
};

refs.thankBackdrop.addEventListener('click', onThankBackdropClick);
window.addEventListener('keydown', onEscKeyPress);

refs.subBtn.addEventListener('click', function(event) {
  event.preventDefault();
  toggleThankModal();
});

function onThankBackdropClick(event) {
  if (event.target === refs.thankBackdrop) {
    toggleThankModal();
  }
}

refs.closeThankBtn.addEventListener('click', function() {
  toggleThankModal();
});

function toggleThankModal() {
  if (!refs.modal.classList.contains('is-hidden')) {
    toggleModal(); 
  }
  refs.thankModal.classList.toggle('is-hidden');
  refs.thankBackdrop.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}

refs.openModalBtns.forEach(btn => {
  btn.addEventListener('click', toggleModal);
});

refs.closeModalBtn.addEventListener('click', toggleModal);
refs.backdrop.addEventListener('click', onBackdropClick);

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
    if (!refs.thankModal.classList.contains('is-hidden')) {
      toggleThankModal();
    }
  }
}
