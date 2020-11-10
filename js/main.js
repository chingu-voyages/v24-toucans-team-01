import ProductArchive, { productList } from './product-list.js';
import filterToggle from './filterToggle.js'; //Toggling to a dropdown menu when px
import navBarDisplay from './nav-bar-responsive';
import scroll from './scroll.js';

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

scroll();
