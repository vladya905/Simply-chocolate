const refs = {
  openModalBtn: document.querySelector('[data-buynow-open]'),
  closeModalBtn: document.querySelector('[data-buynow-close]'),
  menu: document.querySelector('[data-buynow]'),
};
refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
function toggleModal() {
  refs.menu.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
};