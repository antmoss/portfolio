export default function () {
  const resumeItems = document.querySelectorAll('.resume__list-item');

  // terminate the script if there are no items
  if (!resumeItems.length) {
    return;
  }

  // returning a function here so you can set the item without calling the toggle code
  const toggleExpanded = item => () => {
    item.classList.toggle('js-expanded');
  };

  // here we are grabbing each item in the list of items
  Array.from(resumeItems).forEach((item) => {
    const handler = toggleExpanded(item);
    const events = ['click', 'keypress'];

    events.forEach((eventToHandle) => {
      item.addEventListener(eventToHandle, handler);
    });
  });
}
