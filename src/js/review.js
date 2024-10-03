const refs = {
  openMenuBtn: document.querySelector('[data-review-open]'),
  closeMenuBtn: document.querySelector('[data-review-close]'),
  menu: document.querySelector('[data-review]'),
};

refs.openMenuBtn.addEventListener('click', toggleMenu);
refs.closeMenuBtn.addEventListener('click', toggleMenu);
function toggleMenu() {
  refs.menu.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
};