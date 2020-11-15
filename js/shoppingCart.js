const { format } = require('prettier');

const finalTotalDiv = document.getElementById('finalTotalDiv');
var thisProductContainer;
var totalPrice = 0;
const productsList = document.getElementById('productsList');
const navBarTotalPriceDiv = document.getElementById('navBarTotalPrice');
const navBarTotalAmountDiv = document.getElementById('navBarTotalAmount');
var totalAmount = 0;

var productContainers = [];
var productIds = [];
var productPrices = [];

navBarTotalAmountDiv.innerHTML = totalAmount + ' items';

function populateShoppingCart(productId, productName, productPrice, productImage) {
  var productContainerNode = document.createElement('div');
  productContainerNode.classList.add('product-container');
  productContainerNode.id = 'productContainer' + productId;
  productContainerNode.innerHTML = `<div class="row px-1rem">
  <div class="col-12 col-sm-3 pl-0">
    <div class="d-flex justify-content-center">
      <img class="square-cropped-100px border-radius-100" src=${productImage} alt="" />
    </div>
  </div>
  <div class="col-6 col-sm-5 d-flex flex-column pr-0" id = "middleColumn">
    <div class="my-auto">
    <p class = "product-name">${productName}</p>
      <div class = "product-price-div">
        <p id = "pricePerUnit${productId}" class = "pricePerUnit" style = "display: block">${productPrice}</p>
        <p id = "priceTotal${productId}" class = "priceTotal" style = "display: none !important"></p>
      </div>
    </div>
  </div>
  <div class="col-4 col-sm-3 d-flex align-items-center justify-content-between pl-0" id = "inputColumn">
  <div class="input-group">
      <button id="minusButton${productId}" class="minus-button btn btn-outline-secondary btn-sm text-1-5rem">-</button
      ><input
        id = "quantity${productId}"
        type="number"
        class="quantities form-control input-number d-inline-block px-1 text-center text-1-5rem"
        name="qty"
        value="1"
        placeholder="1"
      /><button id="plusButton${productId}" class="plus-button btn btn-outline-secondary btn-sm text-1-5rem">+</button>
    </div>
  </div>
  <div class="col-2 col-sm-1 d-flex align-items-center p-0" id="trashColumn"><i id="trashButton${productId}" class="trash-button fa fa-trash"></i></div>
</div>`;

  if (!productIds.includes(productId)) {
    // if the product is not already in the shopping cart
    productsList.appendChild(productContainerNode);
    productContainers.push(productContainerNode);
    productIds.push(productId);
    productPrices.push(productPrice);
  } else {
    quantity = document.getElementById('quantity' + productId);
    thisPriceFinal = document.getElementById('priceTotal' + productId).innerHTML;
    thisProductPrice = document.getElementById('pricePerUnit' + productId).innerHTML;
    amount = parseInt(quantity.value);
    amount = amount + 1;
    quantity.value = amount; // adds 1 to value in text box
    priceToCents(thisProductPrice); // convert price from $6.99 to 699
    thisPriceFinal = priceInCents * amount;
    showTotalPriceForProduct(productId);
    productPriceToDollars(thisPriceFinal, thisPriceTotalDiv);
  }

  makeInputsWork('quantity' + productId);
  makeButtonsWork('minusButton' + productId, 'plusButton' + productId, 'trashButton' + productId, productId);
  calculateFinalTotal();
  calculateTotalAmount();
}

var priceToAdd;
const pricePerUnits = document.getElementsByClassName('pricePerUnit');
const priceTotals = document.getElementsByClassName('priceTotal');

function calculateFinalTotal() {
  totalPrice = 0;
  for (var i = 0; i < pricePerUnits.length; i++) {
    if (pricePerUnits[i].style.display == 'block') {
      priceToAdd = pricePerUnits[i].innerHTML;
      priceToCents(priceToAdd);
      totalPrice += priceInCents;
    }
  }
  for (var i = 0; i < priceTotals.length; i++) {
    if (priceTotals[i].style.display == 'block') {
      priceToAdd = priceTotals[i].innerHTML;
      priceToCents(priceToAdd);
      totalPrice += priceInCents;
    }
  }
  totalPriceDividedBy100 = (totalPrice / 100).toFixed(2); //totalPrice has already been changed into cents
  finalTotalDiv.innerHTML = '$' + totalPriceDividedBy100;
  navBarTotalPriceDiv.innerHTML = '$' + totalPriceDividedBy100;
}

function calculateTotalAmount() {
  const quantities = document.getElementsByClassName('quantities');
  totalAmount = 0;
  for (var i = 0; i < quantities.length; i++) {
    totalAmount += parseInt(quantities[i].value);
  }
  navBarTotalAmountDiv.innerHTML = totalAmount + ' items';
}

var amount;
var quantity;
var priceInCents;
var totalPriceForProduct;
var thisPriceFinal;
var thisProductPrice;
var thisPrice;

function minusPrice(minusButtonId) {
  getQuantityPriceIds(minusButtonId, 11); // get the relevant quantities and prices
  amount = amount - 1;
  if (amount < 0) {
    amount = 0;
  }
  quantity.value = amount; 
  priceToCents(thisProductPrice);
  totalPriceForProduct = priceInCents * amount;
  thisPriceFinal = totalPriceForProduct;
  totalPrice -= priceInCents; 
  showTotalPriceForProduct(idNumber);
  productPriceToDollars(thisPriceFinal, thisPriceTotalDiv);
  calculateFinalTotal();
  calculateTotalAmount();
}

function plusPrices(plusButtonId) {
  getQuantityPriceIds(plusButtonId, 10);
  amount = amount + 1;
  quantity.value = amount;
  if (amount == 1) {
    thisPriceFinal = thisProductPrice;
  }
  priceToCents(thisProductPrice);
  thisPriceFinal = priceInCents * amount;
  totalPrice += priceInCents;
  showTotalPriceForProduct(idNumber);
  productPriceToDollars(thisPriceFinal, thisPriceTotalDiv);
  calculateFinalTotal();
  calculateTotalAmount();
}

var thisPriceTotalDiv;

function multiplyPrice(quantitiesInputId) {
  getQuantityPriceIds(quantitiesInputId, 8); 
  priceToCents(thisProductPrice);
  thisPriceFinal = priceInCents * amount;
  showTotalPriceForProduct(idNumber);
  productPriceToDollars(thisPriceFinal, thisPriceTotalDiv);
  calculateFinalTotal();
  calculateTotalAmount();
}

var totalPriceDividedBy100;
var idNumber;
var thisPricePerUnit;

//get the quantities and prices that will be affected by clicking the plus and minus buttons:

function getQuantityPriceIds(buttonId, idPosition) {
  idNumber = buttonId.substr(idPosition);
  if (buttonId[0] == 'q') {
    quantity = document.getElementById(buttonId);
  } else {
    // if the button is not a quantity input
    quantity = document.getElementById('quantity' + idNumber);
  }
  thisPriceFinal = document.getElementById('priceTotal' + idNumber).innerHTML; // incl totals
  thisProductPrice = document.getElementById('pricePerUnit' + idNumber).innerHTML;
  amount = parseInt(quantity.value);
}

//change prices to cents to make calculations with money easier:

function priceToCents(thisPrice) {
  if (thisPrice.includes('$')) {
    thisPrice = thisPrice.replace('$', '');
  }
  if (thisPrice.includes('.')) {
    thisPrice = thisPrice.replace('.', '');
  }
  if (typeof thisPrice == 'string') {
    thisPrice = parseInt(thisPrice);
  }
  priceInCents = thisPrice;
}

function showTotalPriceForProduct(idNumber) {
  thisPricePerUnit = document.getElementById('pricePerUnit' + idNumber);
  thisPriceTotalDiv = document.getElementById('priceTotal' + idNumber);
  if ((thisPricePerUnit.style.display = 'block')) {
    thisPricePerUnit.style.display = 'none';
    thisPriceTotalDiv.style.display = 'block';
  }
}

var priceDividedBy100;

function productPriceToDollars(price, div) {
  priceDividedBy100 = price / 100;
  priceDividedBy100 = priceDividedBy100.toFixed(2);
  price = '$' + priceDividedBy100;
  div.innerHTML = price;
}

function makeInputsWork(quantitiesInputId) {
  var quantitiesInput = document.getElementById(quantitiesInputId);
  quantitiesInput.addEventListener('keyup', function (event) {
    if (event.code == 'Enter') {
      amount = quantitiesInput.value;
      multiplyPrice(quantitiesInputId);
    }
  });
}

function makeButtonsWork(minusButtonId, plusButtonId, trashButtonId, productId) {
  var minusButton = document.getElementById(minusButtonId);
  var plusButton = document.getElementById(plusButtonId);
  var trashButton = document.getElementById(trashButtonId);
  minusButton.onclick = function () {
    minusPrice(minusButtonId);
  };
  plusButton.onclick = function () {
    plusPrices(plusButtonId);
  };
  trashButton.onclick = function () {
    getQuantityPriceIds(trashButtonId, 11); // get the relevant quantities and prices
    thisProductContainer = document.getElementById('productContainer' + idNumber);

    if (confirm(`Are you sure you want to delete this product?`)) {
      if (document.getElementById('priceTotal' + idNumber).style.display == 'block') {
        thisPrice = thisPriceFinal;
      } else if (document.getElementById('pricePerUnit' + idNumber).style.display == 'block') {
        thisPrice = thisProductPrice;
      }
      priceToCents(thisPrice);
      totalPrice -= priceInCents;
      totalPriceDividedBy100 = (totalPrice / 100).toFixed(2);
      finalTotalDiv.innerHTML = '$' + totalPriceDividedBy100;
      navBarTotalPriceDiv.innerHTML = '$' + totalPriceDividedBy100;
      amount = document.getElementById('quantity' + idNumber);
      amount = parseInt(amount.value);
      totalAmount -= amount;
      navBarTotalAmountDiv.innerHTML = totalAmount + ' items';
      var index = productIds.indexOf(idNumber);  // remove the productId too
      if (index >= 0) {
        productIds.splice(index, 1);
      }
      thisProductContainer.remove();
    }
  };
}

const checkoutButton = document.getElementById('checkoutButton');
checkoutButton.onclick = function () {
  alert('Thank you for placing your order!');
};

export { populateShoppingCart };
