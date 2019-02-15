export default function () {
  const button = document.querySelector('.site-footer .btn');
  let intervalId = 0;

  function scrollStep() {
  // Check if we're at the top already. If so, stop scrolling by clearing the interval
    if (window.pageYOffset === 0) {
      clearInterval(intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
  }

  function scrollToTop() {
  // Call the function scrollStep() every 16.66 millisecons
    intervalId = setInterval(scrollStep, 10);
  }

  button.addEventListener('click', scrollToTop);
}
