import ProductArchive, { fetchAllProducts, fetchProductsByCategory } from './productArchive.js';
import filterToggle from './filterToggle.js'; //Toggling to a dropdown menu when px
import navBarDisplay from './nav-bar-responsive';
import scroll from './scroll.js';
import { populateShoppingCart }  from './shoppingCart.js';

navBarDisplay(); 

//fetchAllProducts();
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
  const inputLC = e.target.value.toLowerCase();
  const arrayCopy = products.productListArray.map( product => {
    return [product.productName, product.productName.toLowerCase()];
  });
  const filtered = arrayCopy.filter(item => item[1].includes(inputLC));
  const filteredMod = filtered.map( item => item[0]);
  const refined=[]
  products.productListArray.forEach((product) => {
    if (filteredMod.includes(product.productName) && !refined.includes(product.productName)) {
      refined.push(product);
    }
  });
  //const array = products.productListArray.filter(product => product.productName.includes(e.target.value));
  //NewList = new ProductArchive(array);
  //console.log(NewList);
  NewList = new ProductArchive(refined);
  NewList.displayProducts();
})}).catch(e => console.log("hello error",e));

filterToggle();

document.querySelector('.product-cards').addEventListener('click', (e) => {
  e.stopPropagation();
  e.preventDefault();
  if (e.target.matches('.add-to-cart')) {
    
    var productId = e.target.closest('.product-card').dataset.id;
    var productImage = e.target.closest('.product-card').querySelector('.product-card-image').getAttribute('src');
    var productName =  e.target.closest('.product-card').querySelector('.product-card-name').innerText;
    var productPrice =  e.target.closest('.product-card').querySelector('.product-card-price').innerText;

    populateShoppingCart(productId, productName, productPrice, productImage);
  }
});
document.querySelector('#product-modal .add-to-cart').addEventListener('click', (e) => {
  e.stopPropagation();
  e.preventDefault();
  
  var productId = document.querySelector('#product-modal').dataset.id;
  var productName =  document.querySelector('#product-modal').querySelector('.product-desc-content > h5').innerText;
  var productImage =  document.querySelector('#product-modal').querySelector('.img-fluid').getAttribute('src');
  var productPrice =  document.querySelector('#product-modal').querySelector('.price-qty > h5').innerText;
  populateShoppingCart(productId, productName, productPrice, productImage);
});
scroll();