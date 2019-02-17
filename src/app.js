// import css
import './main.scss';

// import javascript modules
import domready from 'domready';
import smoothScroll from './javascript/smooth-scroll';
import shrinkingHeader from './javascript/shrinking-header';
import hiddenResume from './javascript/hidden-resume';
import barChart from './javascript/bar-chart';
import handburgerMenu from './javascript/handburger-menu';
import backToTop from './javascript/back-to-top';
import animationEffectOnScroll from './javascript/animation-effect-on-scroll';

domready(() => {
  smoothScroll();
  shrinkingHeader();
  hiddenResume();
  barChart();
  handburgerMenu();
  backToTop();
  animationEffectOnScroll();
});
