const menuOpenButton = document.querySelector('[data-menu-open]');
const menuCloseButton = document.querySelector('[data-menu-close]');
const menu = document.querySelector('[data-menu]');



menuOpenButton.addEventListener('click', () => {
  menu.classList.remove('is-hidden');
  menu.classList.add('active');
});

menuCloseButton.addEventListener('click', () => {
  menu.classList.remove('active'); 
  setTimeout(() => {
    menu.classList.add('is-hidden'); 
  }, 250);
});

const smoothScrollLinks = document.querySelectorAll('.scroll');


smoothScrollLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    
    const targetId = link.getAttribute('href');

    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


  
