function humburgerToggle() {
 document.querySelector('.humburger').classList.toggle('change');
  let toggleButtons = document.querySelector('.navigation');
  if (toggleButtons.className === 'navigation') {
    toggleButtons.className += ' responsive';
  } else {
    toggleButtons.className = 'navigation';
  }
};

export default function navBarDisplay(){
    document.querySelector('.humburger').addEventListener('click', humburgerToggle);    
}