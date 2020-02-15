// **************** set date *****************
document.querySelector('#date').innerHTML = new Date().getFullYear();

// **************** toggle navbar *****************
const navLinks = document.querySelector('#nav-links');
const btnToggle = document.querySelector('#nav-toggle');
btnToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show-links');
});

// **************** navbar fixed *****************
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (pageYOffset > 62) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});
