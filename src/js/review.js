const refs = {
  feedbackBackdrop: document.querySelector('[data-feedback-backdrop]'),
  feedbackModal: document.querySelector('[data-feedback-modal]'),
  closeFeedbackBtn: document.querySelector('[data-feedback-close]'),
  openModalBtn: document.querySelector('[data-review-open]'),
  closeModalBtn: document.querySelector('[data-review-close]'),
  modal: document.querySelector('[data-review]'),
  backdrop: document.querySelector('[data-review-backdrop]'),
  submitBtn: document.querySelector('[data-submit]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.backdrop.addEventListener('click', onBackdropClick);
refs.feedbackBackdrop.addEventListener('click', onFeedbackBackdropClick);
window.addEventListener('keydown', onEscKeyPress);
refs.submitBtn.addEventListener('click', function(event) {
  event.preventDefault();
  toggleFeedbackModal();
});

refs.closeFeedbackBtn.addEventListener('click', function() {
  toggleFeedbackModal();
});

function toggleFeedbackModal() {
  if (!refs.modal.classList.contains('is-hidden')) {
    toggleModal(); 
  }
  refs.feedbackModal.classList.toggle('is-hidden');
  refs.feedbackBackdrop.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}

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

function onFeedbackBackdropClick(event) {
  if (event.target === refs.feedbackBackdrop) {
    toggleFeedbackModal();
  }
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    if (!refs.modal.classList.contains('is-hidden')) {
      toggleModal();
    }
    if (!refs.feedbackModal.classList.contains('is-hidden')) {
      toggleFeedbackModal();
    }
  }
}
