export default function () {
  // get the section which we want to fire the function
  const element = document.querySelector('.skills');

  const isInViewport = (elem) => {
    const bounding = elem.getBoundingClientRect();
    return (
      bounding.top >= 0
      && bounding.left >= 0
      && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      && bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

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
