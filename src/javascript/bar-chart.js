export default function () {
  // get the section which we want to fire the function
  const element = document.querySelector('.skills');

  function isInViewport() {
    const bounding = element.getBoundingClientRect();

    if (
      bounding.top >= 0
      && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
      return true;
    }
    return false;
  }

  window.addEventListener('scroll', () => {
    if (isInViewport(element)) {
      const bars = document.querySelectorAll('.bar__inner');

      // terminate the script if there are no items
      if (!bars.length) {
        return;
      }

      Array.from(bars).forEach((bar, index) => {
        setTimeout(() => {
          const eachBar = bar;
          eachBar.style.width = bar.dataset.percent;
        }, index * 400);
      });
    }
  }, false);
}
