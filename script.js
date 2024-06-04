'use strict';

// Selecting elements
const linkContainer = document.querySelector('.nav__links');
const links = document.querySelectorAll('.nav__link');

// Event handler
const handleHover = (e, opacity) => {
  if (e.target.classList.contains('nav__link')) {
    const target = e.target;
    links.forEach(link => {
      link.style.opacity = `${opacity}`;
    });
    target.style.opacity = 1;
  }
};

linkContainer.addEventListener('mouseover', e => {
  handleHover(e, 0.5);
});

linkContainer.addEventListener('mouseout', e => {
  handleHover(e, 1);
});
