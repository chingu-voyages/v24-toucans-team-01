export default class ProductArchive {
  constructor(productListArray) {
    this.productListArray = productListArray;
  }

  productToHtmlElement(product, index) {
    const html = `
          <div class="product-card" data-category="${product.category}" data-id="${product.productId}" data-arrayindex="${index}">
            <div class="product-card-image-frame">
              <img class="product-card-image" src="${product.image}" data-toggle="modal" data-target="#product-modal" />
            </div>
            <div class="product-card-body">
              <h5 class="product-card-name">${product.productName}</h5>
              <h5 class="product-card-price">${product.price}</h5>
            </div>
            <div class="product-card-footer">
              <button class="btn add-to-cart shadow-none">Add to cart</button>
            </div>
          </div>
    `;
    return document.createRange().createContextualFragment(html);
  }

  displayProducts() {
    const productCards = document.querySelector('.product-cards');
    const lastIndex = this.productListArray.length - 1;
    const productModal = document.querySelector('.modal.product-desc');

    let old_arrowleft = productModal.querySelector('.product-carousel-arrow-left');
    let new_arrowleft = old_arrowleft.cloneNode(true);
    old_arrowleft.parentNode.replaceChild(new_arrowleft, old_arrowleft);
    
    let old_arrowright = productModal.querySelector('.product-carousel-arrow-right');
    let new_arrowright = old_arrowright.cloneNode(true);
    old_arrowright.parentNode.replaceChild(new_arrowright, old_arrowright);

    this.productListArray.map((product, index) => {
      const productToElement = this.productToHtmlElement(product, index);
      productCards.append(productToElement);
    });

    productModal.querySelector('.product-carousel-arrow-left').addEventListener('click', (e) => {
      this.defaultHandler(e);
      this.arrowHandler(productModal, lastIndex, true);
    });

    productModal.querySelector('.product-carousel-arrow-right').addEventListener('click', (e) => {
      this.defaultHandler(e);
      this.arrowHandler(productModal, lastIndex, false);
    });

    productCards.addEventListener('click', (e) => {
      this.defaultHandler(e);
      if (e.target.matches('.product-card-image')) {
        this.modalUpdate(productModal, e.target.closest('.product-card').dataset.arrayindex);
        //console.log(e.target.closest('.product-card').dataset.arrayindex, "hello");
      }
    });

    // productModal.querySelector('.product-desc-input-width').addEventListener('click', (e) => {
    //   this.defaultHandler(e);
    //   this.quantityHandler(productModal, e);
    // });
  }

  // quantityHandler(productModal,e) {
  //   let quantity = productModal.querySelector('.product-desc-input-width input').value;
  //   if (e.target.innerText === '+') {
  //     quantity++;
  //   }
  //   if (e.target.innerText === '-') {
  //     quantity--;
  //   }
  //   if (quantity > 0) {
  //     productModal.querySelector('.product-desc-input-width input').value = quantity;
  //   }
  // }
  
  arrowHandler(productModal, lastIndex, left) {
    let index = Number(productModal.dataset.arrayindex);
    let itemIndex = 0;
    if (left) {
      itemIndex = index > 0 ? index - 1 : lastIndex;
    } else {
      itemIndex = index < lastIndex ? index + 1 : 0;
    }
    //console.log(itemIndex);
    this.modalUpdate(productModal, itemIndex);
    return (index = itemIndex);
  }

  defaultHandler(e) {
    e.stopPropagation();
    e.preventDefault();
  }
  modalUpdate(productModal, targetIndex) {
    const targetItem = this.productListArray[targetIndex];
    //console.log(targetIndex);
    productModal.dataset.arrayindex = targetIndex;
    productModal.dataset.category = targetItem.category;
    productModal.dataset.id = targetItem.productId;
    productModal.querySelector('img').src = targetItem.image;
    productModal.querySelector('.product-desc-content').children[0].innerText = targetItem.productName;
    productModal.querySelector('.product-desc-content').children[1].innerText = targetItem.description;
    productModal.querySelector('.product-desc-content').children[3].innerText = targetItem.ingredients;
    productModal.querySelector('.price-qty>h5').innerText = targetItem.price;
    // productModal.querySelector('.product-desc-input-width input').value = 1;
  }
}

export async function fetchAllProducts() {
  let array = [];
  let DefaultProducts;
  document.querySelector('.product-cards').textContent='';
  try {
  const response = await fetch('https://peaceful-eyrie-59012.herokuapp.com/products');
  const data = await response.json();
  data.forEach((item) => {
    let product = {
      productId: item.productId,
      productName: item.productName,
      price: item.price,
      image: item.image,
      category: item.category,
      description: item.description,
      ingredients: item.ingredients,
    };
    array.push(product);
  });
   DefaultProducts= new ProductArchive(array);
  
  } catch(e){
    console.log("error");
  }
  DefaultProducts.displayProducts();
  return DefaultProducts;
}

export async function fetchProductsByCategory(category) {
  let array = [];
  let DefaultProducts;
  document.querySelector('.product-cards').textContent = '';
  document.querySelector('.product-search-box input').value='';
  try {
    const response = await fetch(`https://peaceful-eyrie-59012.herokuapp.com/products/category/${category}`);
    const data = await response.json();

    data.forEach((item) => {
      let product = {
        productId: item.productId,
        productName: item.productName,
        price: item.price,
        image: item.image,
        category: item.category,
        description: item.description,
        ingredients: item.ingredients,
      };
      array.push(product);
    });
    DefaultProducts = new ProductArchive(array);
  } catch (e) {
    console.log('error');
  }
  DefaultProducts.displayProducts();
  return DefaultProducts; 
}