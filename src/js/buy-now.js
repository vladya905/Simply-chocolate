const refs = {
  openMenuBtn: document.querySelector('[data-buynow-open]'),
  closeMenuBtn: document.querySelector('[data-buynow-close]'),
  menu: document.querySelector('[data-buynow]'),
};
refs.openMenuBtn.addEventListener('click', toggleMenu);
refs.closeMenuBtn.addEventListener('click', toggleMenu);
function toggleMenu() {
  refs.menu.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
};