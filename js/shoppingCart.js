// const { format } = require('prettier');

var productContainers = document.getElementsByClassName('product-container');
var productContainer;
var buttons = [];
var elementClicked;
var originalTotalDiv = document.getElementById('originalTotalDiv');
var finalTotalDiv = document.getElementById('finalTotalDiv');
var priceDivs = document.getElementsByClassName('product-price-div');
var thisProductContainer;
var thisPriceTotalDivId;
var totalPrice = 0;

var amount;
var quantity;
var priceInCents;
var totalPriceForProduct;

function minusPrice() {
  getQuantityPriceIds(11); // get the relevant quantities and prices
  if (amount > 0) { // do not let amount go below zero!
    amount = amount - 1;
    quantity.value = amount; // subtracts 1 from value in text box
    thisPrice = thisPricePerUnitInnerHTML;
    priceToCents(thisPrice); // convert price from $6.99 to 699
    totalPriceForProduct = priceInCents * amount;
    totalPrice = originalTotalPrice -= priceInCents;
    showTotalPriceForProduct(); // makes the div visible
    calculateFinalTotal();
  }
}

function plusPrices() {
  getQuantityPriceIds(10); // get the relevant quantities and prices
  amount = amount + 1;
  quantity.value = amount; // adds 1 to value in text box
  thisPrice = thisPricePerUnitInnerHTML;
  priceToCents(thisPrice); // convert price from $6.99 to 699
  totalPriceForProduct = priceInCents * amount;
  totalPrice = originalTotalPrice += priceInCents;
  showTotalPriceForProduct(); // makes the div visible
  calculateFinalTotal();
}

var thisPriceTotal;
var thisPrice;

function multiplyPrice() {
  thisPrice = thisPricePerUnitInnerHTML;
  priceToCents(thisPrice); // convert price from $6.99 to 699
  totalPriceForProduct = priceInCents * amount;
  showTotalPriceForProduct(); // makes the div visible
  calculateFinalTotal();
}

var pricesToAddUp = [];
var totalPriceDividedBy100;

function calculateFinalTotal() {
  pricesToAddUp = [];
  totalPrice = 0;
  for (i = 0; i < priceDivs.length; i++) {
    if (document.getElementById("pricePerUnit" + i)){ // e.g. if pricePerUnit0 has not been deleted
      thisPricePerUnit = document.getElementById("pricePerUnit" + i); 
    }
    if (document.getElementById("priceTotal" + i)){ // e.g. if priceTotal0 has not been deleted
      thisPriceTotal = document.getElementById("priceTotal" + i);
    }
    if (thisPricePerUnit){ // if original price has not been deleted by pressing the trash button
      if (thisPricePerUnit.style.display == "block"){ // if original price displayed, add that to total
        thisPrice = thisPricePerUnit.innerHTML;
        priceToCents(thisPrice);
        pricesToAddUp.push(priceInCents);
      }
    }
    if (thisPriceTotal){ // if total prices have not been deleted by pressing the trash button
      if (thisPriceTotal.style.display == "block"){ // if total price displayed, add that to total
        thisPrice = thisPriceTotal.innerHTML;
        priceToCents(thisPrice);
        pricesToAddUp.push(priceInCents);
      }
    }
  }
  for (i = 0; i < pricesToAddUp.length; i++){
    totalPrice += pricesToAddUp[i];
  }
  originalTotalDiv.style.display = 'none';
  finalTotalDiv.style.display = 'block';
  totalPriceDividedBy100 = (totalPrice / 100).toFixed(2);
  finalTotalDiv.innerHTML = '$' + totalPriceDividedBy100;
  priceToDollars();
}

var idNumber;
var thisPricePerUnit;
var thisPricePerUnitInnerHTML;

//get the quantities and prices that will be changed by clicking the plus and minus buttons:
function getQuantityPriceIds(idPosition) {
  idNumber = elementClicked.id.substr(idPosition); // get the ID number out of the element's ID (e.g. get the 2 at position #11 from minusButton2, here idPosition is 11)
  quantity = document.getElementById('quantity' + idNumber);
  thisPricePerUnit = document.getElementById('pricePerUnit' + idNumber); // e.g. pricePerUnit0
  thisPriceTotalDivId = document.getElementById('priceTotal' + idNumber);
  amount = parseInt(quantity.value);
  thisPricePerUnitInnerHTML = thisPricePerUnit.innerHTML;
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

function showTotalPriceForProduct() {
  thisPricePerUnit.style.display = 'none';
  thisPriceTotalDivId.style.display = 'block';
  priceToDollars();
}

var priceDividedBy100;

function priceToDollars() {
  priceDividedBy100 = totalPriceForProduct / 100;
  priceDividedBy100 = priceDividedBy100.toFixed(2);
  thisPriceTotalDivId.innerHTML = '$' + priceDividedBy100;
}

// populate the shopping cart with dummy products:
for (var i = 0; i < productContainers.length; i++) {
  productContainer = productContainers[i];
  productContainer.id = 'productContainer' + i;
  productContainer.innerHTML = 
  `<div class="row px-1rem">
    <div class="col-sm-3 pl-0">
      <div class="d-flex justify-content-center">
        <img class="square-cropped-100px border-radius-100" src="assets/img/cake-${i}.jpg" alt="" />
      </div>
    </div>
    <div class="col-sm-5 d-flex flex-column pr-0">
      <div class="my-auto">
        <p>Cake</p>
        <div class = "product-price-div">
          <p id = "pricePerUnit${i}" class = "pricePerUnit" style = "display: block">$6.99</p>
          <p id = "priceTotal${i}" class = "priceTotal" style = "display: none !important"></p>
        </div>
      </div>
    </div>
    <div class="col-sm-3 d-flex align-items-center justify-content-between pl-0">
      <div class="input-group width-90">
        <button id="minusButton${i}" class="minus-button btn btn-outline-secondary btn-sm text-1-5rem">-</button
        ><input
          id = "quantity${i}"
          type="number"
          class="quantities form-control input-number d-inline-block px-1 text-center text-1-5rem"
          name="qty"
          value="1"
          placeholder="1"
        /><button id="plusButton${i}" class="plus-button btn btn-outline-secondary btn-sm text-1-5rem">+</button>
      </div>
    </div>
    <div class="col-sm-1 d-flex align-items-center p-0"><i id="trashButton${i}" class="trash-button fa fa-trash"></i></div>
  </div>`;

  // add all buttons to array so you can add onclick listeners to them later
  buttons.push(document.getElementById('minusButton' + i));
  buttons.push(document.getElementById('plusButton' + i));
  buttons.push(document.getElementById('trashButton' + i));
}

// add together all the prices before any plus, minus or trash buttons are clicked
var originalTotalPrice = 0;
var originalTotalPriceDividedBy100;
for (i = 0; i < priceDivs.length; i++) {
  thisPricePerUnit = document.getElementById('pricePerUnit' + i);
  thisPriceTotalDivId = document.getElementById('priceTotal' + i);
  thisPricePerUnitInnerHTML = thisPricePerUnit.innerHTML;
  thisPrice = thisPricePerUnitInnerHTML;
  priceToCents(thisPrice);
  originalTotalPrice = originalTotalPrice + priceInCents;
}
originalTotalPriceDividedBy100 = originalTotalPrice / 100;
originalTotalDiv.innerHTML = '$' + originalTotalPriceDividedBy100;

// add functionality to the text inputs
var quantities = document.getElementsByClassName("quantities");
for (i = 0; i < quantities.length; i++){
  quantities[i].onclick = function(){
    elementClicked = this; 
    getQuantityPriceIds(8);
    quantity.addEventListener("keyup", function(event) {
      if (event.code == 'Enter') {     
        amount = quantity.value;
        showTotalPriceForProduct();
        multiplyPrice();      
      }
    }); 
  }
}

// add functionality to the plus, minus and trash buttons
for (i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    elementClicked = this;
    if (elementClicked.classList.contains('minus-button')) {
      minusPrice();
    } else if (elementClicked.classList.contains('plus-button')) {
      plusPrices();
    } else if (elementClicked.classList.contains('trash-button')) {
      idNumber = this.id.substr(11);
      thisProductContainer = document.getElementById('productContainer' + idNumber);
      if (confirm('Are you sure you want to delete this item?')) {
        thisProductContainer.remove();
        calculateFinalTotal();
      }
    }
  };
}

var checkoutButton = document.getElementById("checkoutButton");
checkoutButton.onclick = function(){
  alert("Thank you for placing your order!");
}