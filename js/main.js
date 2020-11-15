import ProductArchive, { fetchAllProducts, fetchProductsByCategory } from './product-list.js';
import filterToggle from './filterToggle.js'; //Toggling to a dropdown menu when px
import navBarDisplay from './nav-bar-responsive';
import scroll from './scroll.js';

navBarDisplay(); 

fetchAllProducts();
document.querySelector('.product-categories').addEventListener('click', (e) => {
  e.stopPropagation();
  e.preventDefault();
  document.querySelector('.product-search-box input').value = '';
  if (e.target.matches('button')) {
    switch (e.target.innerText) {
      case 'All':
        return fetchAllProducts('');
      case 'Cakes':
        return fetchProductsByCategory('cake');
      case 'Cupcakes':
        return fetchProductsByCategory('cupcake');
      case 'Sweets':
        return fetchProductsByCategory('sweets');
      case 'Doughnuts':
        return fetchProductsByCategory('doughnut');
      default:
        return;
    } 
  }
});

let NewList;
fetchAllProducts().then( products =>{
  document.querySelector(".product-search-box input").addEventListener("input", function(e){
  document.querySelector('.product-cards').textContent = '';  
  const array = products.productListArray.filter(product => product.productName.includes(e.target.value));
  NewList = new ProductArchive(array);
  NewList.displayProducts();
})}).catch(e => console.log("hello error",e));

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
document.querySelector('#product-modal .add-to-cart').addEventListener('click', (e) => {
  e.stopPropagation();
  e.preventDefault();
  if( document.querySelector('#product-modal').querySelector('.product-desc-input-width > input').value < 1){
    alert("The quantity cannot be less than one");
    document.querySelector('#product-modal').querySelector('.product-desc-input-width > input').value = 1;
  } else {
    console.log(
      document.querySelector('#product-modal').dataset.id,
      document.querySelector('#product-modal').dataset.category,
      document.querySelector('#product-modal').querySelector('.product-desc-content > h5').innerText,
      document.querySelector('#product-modal').querySelector('.price-qty > h5').innerText,
      document.querySelector('#product-modal').querySelector('.product-desc-input-width > input').value,
    );
  }
});
scroll();