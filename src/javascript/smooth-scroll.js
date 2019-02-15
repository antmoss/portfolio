export default function () {
  let html;
  let body;

  window.onload = () => {
    // getting all anchor elements
    const links = document.querySelectorAll('.main-nav__link');

    // getting html
    html = document.documentElement;

    // getting body
    body = document.body; // eslint-disable-line prefer-destructuring

    function scroll(from, to, hash) {
      const timeInterval = 1; // in ms
      let prevScrollTop;
      const increment = to > from ? 10 : -10;

      const scrollByPixel = setInterval(() => {
        // getting current scroll position
        const scrollTop = Math.round(body.scrollTop || html.scrollTop);
        if (prevScrollTop === scrollTop || (to > from && scrollTop >= to) || (to < from && scrollTop <= to)) { // eslint-disable-line max-len
          clearInterval(scrollByPixel);
          // Add hash to the url after scrolling
          window.location.hash = hash;
        } else {
          body.scrollTop += increment;
          html.scrollTop += increment;

          prevScrollTop = scrollTop;
        }
      }, timeInterval);
    }

    // function which sets the current link
    function setCurrentLink(event) {
      const currentLink = document.querySelectorAll('.current');

      [...currentLink].forEach((current) => {
        current.className = current.className.replace('current', ''); // eslint-disable-line no-param-reassign
      });

      event.target.className += ' current'; // eslint-disable-line no-param-reassign
      document.getElementById(event.target.href.split('#')[1]).className += ' current';
    }

    Array.from(links).forEach((link) => {
      link.addEventListener('click', (event) => {
        // getting current scroll position
        const scrollTop = Math.round(body.scrollTop || html.scrollTop);
        if (link.hash !== '') {
          // preventing default anchor click behavior
          event.preventDefault();

          // getting element with id found in hash
          const hashElement = document.getElementById(link.hash.substring(1));

          let hashElementTop = 0;
          let obj = hashElement;
          while (obj.offsetParent) {
            hashElementTop += obj.offsetTop;
            obj = obj.offsetParent;
          }
          // getting element's position
          hashElementTop = Math.round(hashElementTop);

          scroll(scrollTop, hashElementTop, link.hash);
          setCurrentLink(event);
        }
      });
    });

    // add cover class on first load
    const cover = document.querySelector('.cover__inner');
    cover.classList.add('fadeInUp');
  };
}
