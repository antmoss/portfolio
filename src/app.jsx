// import css
import './main.scss';

import React from 'react';
import { render } from 'react-dom';
import Header from './react-components/Header';


// import javascript modules
import domready from 'domready';
import smoothScroll from './javascript/smooth-scroll';
import shrinkingHeader from './javascript/shrinking-header';
import hiddenResume from './javascript/hidden-resume';
import barChart from './javascript/bar-chart';
import handburgerMenu from './javascript/handburger-menu';
import backToTop from './javascript/back-to-top';
import animationEffectOnScroll from './javascript/animation-effect-on-scroll';

// domready(() => {
//   smoothScroll();
//   shrinkingHeader();
//   hiddenResume();
//   barChart();
//   handburgerMenu();
//   backToTop();
//   animationEffectOnScroll();
// });


function main() {
  render(<Header menuItems={MenuItems} menuItemsDesktop={MenuItemsDesktop}></Header>, reactMenu);
}

if (document.readyState === 'interactive' || document.readyState === 'complete') {
  main();
} else {
  document.onreadystatechange = () => {
    if (document.readyState === 'interactive') {
      main();
    }
  };
}
