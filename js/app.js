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

// **************** smooth scroll *****************
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navLinks.classList.remove('show-links');
    const id = e.target.getAttribute('href');
    const element = document.querySelector(id);
    let position;
    if (navbar.classList.contains('fixed')) {
      position = element.offsetTop - 62;
    } else {
      position = element.offsetTop - 124;
    }
    if (window.innerWidth < 992) {
      if (navbar.classList.contains('fixed')) {
        position = element.offsetTop - 62;
      } else {
        position = element.offsetTop - 270 - 124;
      }
    }
    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth'
    });
  });
});
