import { productList, displayProducts } from './product-list.js';
import filterToggle from './filterToggle.js'; //Toggling to a dropdown menu when px

filterToggle();
displayProducts(productList);

//Dummy function! this is just testing whether the add-to-cart button can retrieve the info
document.querySelector('.product-cards').addEventListener('click', (e) => {
  console.log(
    e.target.closest('.product-card').dataset.id,
    e.target.closest('.product-card').dataset.category,
    e.target.closest('.product-card').querySelector('.product-card-name').innerText,
    e.target.closest('.product-card').querySelector('.product-card-price').innerText,
  );
});
