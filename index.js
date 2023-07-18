// ...
const navigation = document.querySelector('.navigation');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('open');
  navigation.classList.toggle('open');
});

// Agrega este código para cerrar el menú al hacer clic en un enlace
const navLinks = document.querySelectorAll('.navigation .nav-links li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburgerMenu.classList.remove('open');
    navigation.classList.remove('open');
  });
});
// ...



// JavaScript para cambiar las imágenes
const mainImage = document.querySelector('.main-image');
const secondaryImage = document.querySelector('.secondary-image');

let isMainImageVisible = true;

setInterval(() => {
  if (isMainImageVisible) {
    mainImage.style.opacity = '0';
    secondaryImage.style.opacity = '1';
  } else {
    mainImage.style.opacity = '1';
    secondaryImage.style.opacity = '0';
  }

  isMainImageVisible = !isMainImageVisible;
}, 5000);
