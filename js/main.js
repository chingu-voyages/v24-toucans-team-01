import ProductArchive, { productList } from './product-list.js';
import filterToggle from './filterToggle.js'; //Toggling to a dropdown menu when px

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
