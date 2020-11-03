// const { format } = require("prettier");

var productContainers = document.getElementsByClassName('product-container');
var productContainer;
var buttons = [];
var buttonClicked;
var originalTotalDiv = document.getElementById('originalTotalDiv');
var finalTotalDiv = document.getElementById('finalTotalDiv');
var priceDivs = document.getElementsByClassName('product-price-div');
var thisProductContainer;
var thisPriceTotalId;
var pricePerUnit;
var finalTotal = 0;


var amount;
var quantity;
var thisPricePerUnit;
var thisPricePerUnitInnerHTML;
var priceInCents;
var priceDividedBy100;
var totalPriceForProduct;

function minusPrice() {
  getQuantityPriceIds(11);  // get the relevant quantities and prices
  amount = parseInt(quantity.value); // change quantity value to an int, call it 'amount'
  amount = amount - 1;
  quantity.value = amount; // subtracts 1 from value in text box
  thisPricePerUnitInnerHTML = thisPricePerUnit.innerHTML;
  priceToCents(thisPricePerUnitInnerHTML); // convert price from $6.99 to 699
  totalPriceForProduct = priceInCents * amount;
  priceDividedBy100 = totalPriceForProduct / 100;
  showTotalPriceForProduct();
  // finalTotal = originalTotalPriceDividedBy100 + totalPriceForProduct;
  // console.log("finalTotal is " + finalTotal);
  // showOverallPrice();
}

function plusPrices() {
  getQuantityPriceIds(10); // get the relevant quantities and prices
  amount = parseInt(quantity.value); // change quantity value to an int, call it 'amount'
  amount = amount + 1;
  quantity.value = amount; // adds 1 to value in text box
  thisPricePerUnitInnerHTML = thisPricePerUnit.innerHTML;
  priceToCents(thisPricePerUnitInnerHTML); // convert price from $6.99 to 699
  totalPriceForProduct = priceInCents * amount;
  priceDividedBy100 = totalPriceForProduct / 100;
  // showTotalPriceForProduct();
  // finalTotal = originalTotalPriceDividedBy100 + priceDividedBy100;
  // console.log("finalTotal is " + finalTotal);
  // showOverallPrice();
}

var idNumber;
var idPosition;

//get the quantities and prices that will be changed by clicking the plus and minus buttons:
function getQuantityPriceIds(idPosition) {
  idNumber = buttonClicked.id.substr(idPosition); // get the ID number out of the element's ID (e.g. get the 2 at position #11 from minusButton2, here idPosition is 11)
  quantity = document.getElementById('quantity' + idNumber);
  if (quantity.value > 0) {
    thisPricePerUnit = document.getElementById('pricePerUnit' + idNumber); // e.g. pricePerUnit0
    thisPriceTotalId = document.getElementById('priceTotal' + idNumber);
  }
}

//change prices to cents to make calculations with money easier:
function priceToCents(thisPricePerUnitInnerHTML) {
  if (thisPricePerUnitInnerHTML.includes('$')) {
    thisPricePerUnitInnerHTML = thisPricePerUnitInnerHTML.replace('$', '');
  }
  if (thisPricePerUnitInnerHTML.includes('.')) {
    thisPricePerUnitInnerHTML = thisPricePerUnitInnerHTML.replace('.', '');
  }
  if (typeof thisPricePerUnitInnerHTML == 'string') {
    thisPricePerUnitInnerHTML = parseInt(thisPricePerUnitInnerHTML);
  }
  priceInCents = thisPricePerUnitInnerHTML;
}

function showTotalPriceForProduct() {
  console.log("ShowTotalPriceForProduct was called");
  thisPricePerUnit.style.display = 'none';
  thisPriceTotalId.style.display = 'block';
  priceToDollars();
}

function showOverallPrice() {
  originalTotalDiv.style.display = 'none';
  finalTotalDiv.style.display = 'block';
  finalTotalDiv.innerHTML = finalTotal;
  priceToDollars();
}

function priceToDollars() {
  priceDividedBy100 = totalPriceForProduct / 100;
  priceDividedBy100 = priceDividedBy100.toFixed(2);
  thisPriceTotalId.innerHTML = '$' + priceDividedBy100;
  calculateFinalTotal();
}

// //calculate finalTotal
// //go through all priceDivs, if their child div's style is display: block then add the number in the innerHTML to the final price.
// function calculateFinalTotal() {
//   for (i = 0; i < priceDivs.length; i++) {
//     console.log('First child of priceDivs[' + i + '] is: ' + priceDivs[i].firstElementChild.innerHTML);
//     if ((priceDivs[i].firstElementChild.style = 'display: block')) {
//       console.log('Display is block');
//       //This means that the original price can be added to the total
//     } else {
//       console.log('Display is not block');
      // This means that the new price should be added to the total, not the original
//     }
//   }
// }

// populate the shopping cart with dummy products:
for (var i = 0; i < productContainers.length; i++) {
  productContainer = productContainers[i];
  productContainer.id = 'productContainer' + i;
  productContainer.innerHTML = `<div class="row px-1rem">
  <div class="col-sm-3 pl-0">
    <div class="d-flex justify-content-center">
      <img class="square-cropped-100px border-radius-100" src="assets/img/cake-${i}.jpg" alt="" />
    </div>
  </div>
<div class="col-sm-5 d-flex flex-column pr-0">
  <div class="my-auto">
    <p>Cake</p>
    <div class = "product-price-div">
      <p id = "pricePerUnit${i}" class = "pricePerUnit">$6.99</p>
      <p id = "priceTotal${i}" class = "priceTotal" style = "display: none"></p>
    </div>
  </div>
</div>
  <div class="col-sm-3 d-flex align-items-center justify-content-between pl-0">
    <div class="input-group width-90">
      <button id="minusButton${i}" class="minus-button btn btn-outline-secondary btn-sm text-1-5rem">-</button
      ><input
        id = "quantity${i}"
        type="number"
        class="form-control input-number d-inline-block px-1 text-center text-1-5rem"
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
var allOriginalPrices = document.getElementsByClassName('pricePerUnit');
var originalTotalPrice = 0;
for (i = 0; i < allOriginalPrices.length; i++) {
  thisPricePerUnit = allOriginalPrices[i];
  thisPricePerUnitInnerHTML = thisPricePerUnit.innerHTML;
  priceToCents(thisPricePerUnitInnerHTML);
  originalTotalPrice = originalTotalPrice + priceInCents;
}
originalTotalPriceDividedBy100 = originalTotalPrice / 100;
originalTotalDiv.innerHTML = '$' + originalTotalPriceDividedBy100;

// add functionality to the plus, minus and trash buttons
for (i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
    buttonClicked = this;
    if (buttonClicked.classList.contains('minus-button')) {
      minusPrice();
    } else if (buttonClicked.classList.contains('plus-button')) {
      plusPrices();
      showTotalPriceForProduct();
    } else if (buttonClicked.classList.contains('trash-button')) {
      idNumber = this.id.substr(11);
      thisProductContainer = document.getElementById('productContainer' + idNumber);
      if (confirm('Are you sure you want to delete this item?')) {
        thisProductContainer.remove();
      }
    }
  };
}


// calculateFinalTotal();
