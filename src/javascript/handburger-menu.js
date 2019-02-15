export default function () {
  const navSlide = () => {
    const burger = document.querySelector('.handburger-menu');
    const nav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav__links li');

    // toggle nav
    burger.addEventListener('click', () => {
      nav.classList.toggle('js-nav-active');

      // links
      Array.from(navLinks).forEach((link, index) => {
        const eachLink = link;
        eachLink.addEventListener('click', () => {
          nav.classList.remove('js-nav-active');
          burger.classList.toggle('js-toggle');
        });

        eachLink.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.3}s`;
      });

      burger.classList.toggle('js-toggle');
    });
  };

  navSlide();
}
