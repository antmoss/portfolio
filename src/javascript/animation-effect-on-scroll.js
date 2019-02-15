export default function () {
  function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function () { // eslint-disable-line func-names
      const context = this; const
        args = arguments; // eslint-disable-line prefer-rest-params
      const later = function () { // eslint-disable-line func-names
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  /**
     * IE 11
     * To support IE-11 we use the approach below to turn a
     * NodeList into a regular array.
     */
  const sliderImages = Array.prototype.slice.call(document.querySelectorAll('.js-slide-in'));

  function checkSlide() {
    sliderImages.forEach((sliderImage) => {
      // half way through the image
      const slideInAt = (window.pageYOffset + window.innerHeight) - sliderImage.getBoundingClientRect().height / 2; // eslint-disable-line max-len

      const isHalfShown = slideInAt > sliderImage.offsetTop;

      if (isHalfShown) {
        sliderImage.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', debounce(checkSlide));
}
