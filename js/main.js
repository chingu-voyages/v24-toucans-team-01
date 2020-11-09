import ProductArchive, { productList } from './product-list.js';
import filterToggle from './filterToggle.js'; //Toggling to a dropdown menu when px
import navBarDisplay from './nav-bar-responsive';
navBarDisplay();
const DefaultProducts = new ProductArchive(productList);
DefaultProducts.displayProducts();
filterToggle();
//Dummy function! this is just testing whether the add-to-cart button can retrieve the info
document.querySelector('.product-cards').addEventListener('click', (e) => {
  e.stopPropagation();
  e.preventDefault();
  if (e.target.matches('.add-to-cart')) {
    console.log(
      e.target.closest('.product-card').dataset.id,
      e.target.closest('.product-card').dataset.category,
      e.target.closest('.product-card').querySelector('.product-card-name').innerText,
      e.target.closest('.product-card').querySelector('.product-card-price').innerText,
    );
  }
});

/**********************PARALLAX SCROLL EFFECT**************** */


const parallax = document.querySelectorAll('.parallax');

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.forEach(function (prllx, i) {
    if (offset > prllx.offsetTop) {
      prllx.style.backgroundPositionY = (offset - prllx.offsetTop) * 0.6 + "px"
    }
    else {
      prllx.style.backgroundPositionY = "0px";
    };
  });
});

/************SMOOTH SCROLL EFFECT**************************** */

function smoothScroll(target, duration) {
  console.log(target);
  var target = document.querySelector(target);

  var navbarHeight = 0;

  //applying media queries
  if (window.matchMedia("(max-width: 991px) and (min-width: 768px)").matches) {
    navbarHeight = 65;
  } else if (window.matchMedia("(min-width: 992px)").matches) {
    navbarHeight = 75;
  }
  var targetPosition = target.getBoundingClientRect().top - navbarHeight;  //vertical distance to the target section minus header height
  var startPosition = window.pageYOffset;
  var startTime = null;



  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d;
    return c * t * t + b;
  }



  requestAnimationFrame(animation);

}

const links = document.querySelectorAll('[id^="link"]'); //selecting all elements with IDs  which incl. link
console.log(links);

/* var clicked = false;  */ //state variable: check if click event is triggered on target

//looping through every link to add click event listener for associating target
Array.prototype.forEach.call(links, function (el, i) {
  // "el" is your element


  document.getElementById(el.id).addEventListener('click', function (event) {
    event.preventDefault();
    /* document.querySelector(".navigation__link--active").classList.remove("navigation__link--active");
    document.getElementById(el.id).classList.add("navigation__link--active");
    clicked = true; */
    smoothScroll('#target-0' + String(i + 1), 1000);
    //prevent clicked state change during animation scroll
    /* setTimeout(function () {
      clicked = false;
    }, 1001); */

  });


});
