const refs = {
  feedbackBackdrop: document.querySelector('[data-feedback-backdrop]'),
  feedbackModal: document.querySelector('[data-feedback-modal]'),
  closeFeedbackBtn: document.querySelector('[data-feedback-close]'),
  openModalBtn: document.querySelector('[data-review-open]'),
  closeModalBtn: document.querySelector('[data-review-close]'),
  modal: document.querySelector('[data-review]'),
  backdrop: document.querySelector('[data-review-backdrop]'),
  reviewForm: document.querySelector('.nosubmit'), 
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.backdrop.addEventListener('click', onBackdropClick);
refs.feedbackBackdrop.addEventListener('click', onFeedbackBackdropClick);
window.addEventListener('keydown', onEscKeyPress);


refs.reviewForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  if (refs.reviewForm.checkValidity()) { 
    toggleFeedbackModal(); 
  }
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
