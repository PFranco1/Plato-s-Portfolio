const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
  
    if (visibility === 'false') {
      primaryNav.setAttribute('data-visible', 'true');
      navToggle.setAttribute('aria-expanded', 'true');
    } else if (visibility === 'true') {
      primaryNav.setAttribute('data-visible', 'false');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  
    navToggle.classList.toggle('active');
});

  
  
window.addEventListener('load', function () {
  const fadeElements = document.querySelectorAll('.fade');

  fadeElements.forEach((fadeElement, index) => {
      fadeElement.classList.add('animate-fade');
  });
});
