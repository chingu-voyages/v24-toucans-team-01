function filterToggleHandler(e) {
  e.stopPropagation();
  e.preventDefault();
  let toggleButtons = document.querySelector('.product-categories');
  if (toggleButtons.className === 'product-categories') {
    toggleButtons.className += ' responsive';
  } else {
    toggleButtons.className = 'product-categories';
  }
}
export default function filterToggle() {
  return document.querySelector('.product-category i').addEventListener('click', filterToggleHandler);
}
