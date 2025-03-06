// Hamburger Menu Toggle
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
const smallMenu = document.querySelector('.header__sm-menu');
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu');
const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close');
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link');

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active');
  } else {
    smallMenu.classList.add('header__sm-menu--active');
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none');
    headerHamMenuCloseBtn.classList.add('d-none');
  } else {
    headerHamMenuBtn.classList.add('d-none');
    headerHamMenuCloseBtn.classList.remove('d-none');
  }
});

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active');
    headerHamMenuBtn.classList.remove('d-none');
    headerHamMenuCloseBtn.classList.add('d-none');
  });
}

// Logo Click Navigation
const headerLogoContainer = document.querySelector('.header__logo-container');

headerLogoContainer.addEventListener('click', () => {
  location.href = 'index.html';
});

// Carousel Functionality
document.addEventListener('DOMContentLoaded', () => {
  const galleries = document.querySelectorAll('.gallery-container');

  galleries.forEach((galleryContainer) => {
    const gallery = galleryContainer.querySelector('.gallery');
    const scrollLeftBtn = galleryContainer.previousElementSibling; // .scroll-left
    const scrollRightBtn = galleryContainer.nextElementSibling; // .scroll-right
    const scrollAmount = 350; // Matches image width for smooth scrolling

    // Scroll left
    scrollLeftBtn.addEventListener('click', () => {
      galleryContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
    });

    // Scroll right
    scrollRightBtn.addEventListener('click', () => {
      galleryContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    });
  });
});