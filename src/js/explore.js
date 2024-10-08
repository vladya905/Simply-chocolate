const refs = {
  openModalBtn: document.querySelector('[data-explore-open]'),
  closeModalBtn: document.querySelector('[data-explore-close]'),
  modal: document.querySelector('[data-explore]'),
  backdrop: document.querySelector('[data-explore-backdrop]'),
  form: document.querySelector('.explore-form'), 
  thankBackdrops: document.querySelectorAll('[data-thank-backdrop]'), 
  thankModals: document.querySelectorAll('[data-thank-modal]'),
  closeThankBtns: document.querySelectorAll('[data-thank-close]'), 
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.backdrop.addEventListener('click', onBackdropClick);
window.addEventListener('keydown', onEscKeyPress);

refs.form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  if (refs.form.checkValidity()) {
    toggleThankModals(true);
    toggleModal(); 
  } else {
    refs.form.reportValidity(); 
  }
});

refs.closeThankBtns.forEach((btn, index) => {
  btn.addEventListener('click', function() {
    toggleThankModals(false); 
  });
});

refs.thankBackdrops.forEach((backdrop) => {
  backdrop.addEventListener('click', function(event) {
 
    if (event.target === backdrop) {
      toggleThankModals(false); 
    }
  });
});

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  refs.backdrop.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}

function toggleThankModals(isOpening) {
  refs.thankModals.forEach((modal, index) => {

    modal.classList.toggle('is-hidden', !isOpening);
    refs.thankBackdrops[index].classList.toggle('is-hidden', !isOpening);
  });
  document.body.classList.toggle('no-scroll', isOpening);
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
    refs.thankModals.forEach((modal, index) => {
      if (!modal.classList.contains('is-hidden')) {
        toggleThankModals(false); 
      }
    });
  }
}
