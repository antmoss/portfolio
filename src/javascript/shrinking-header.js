export default function () {
  function breakpointChecker() {
    /**
     * add a throttle so that we don't fire off
     * events like crazy during long scroll sessions.
     * For this we add a debounce function
     * which will make sure it waits 10ms before firing
     */
    const debounce = (func, wait = 10, immediate = true) => () => {
      let timeout;

      const context = this;
      const args = arguments; // eslint-disable-line prefer-rest-params

      const later = () => {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };

    let scrollPos = 0;
    const siteHeader = document.querySelector('.site-header');

    function checkPosition() {
      // get the how far in pixels we are from the top of the page
      const windowY = window.scrollY;
      if (windowY < scrollPos) {
        /**
        If windowY is less than the previous scrollPos then we
        know that we are scrolling up and we can add a class to
        our nav element accordingly.
        *
        */

        // Scrolling UP
        siteHeader.classList.add('js-site-header--visible');
        siteHeader.classList.remove('js-site-header--hidden');
      } else {
        // Scrolling DOWN
        siteHeader.classList.add('js-site-header--hidden');
        siteHeader.classList.remove('js-site-header--visible');
      }
      scrollPos = windowY;
    }

    // window.addEventListener('scroll', checkPosition);
    window.addEventListener('scroll', debounce(checkPosition));
  }

  if (window.matchMedia('(min-width: 768px)').matches) {
    breakpointChecker();
  }
}
