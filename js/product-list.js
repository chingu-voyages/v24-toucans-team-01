function productToHtmlElement(product) {
  const html = `
        <div class="product-card" data-category="${product.category}" data-id="${product.productId}">
          <img class="product-card-image" src="${product.image}" />
          <div class="product-card-body">
            <h5 class="product-card-name">${product.productName}</h5>
            <h5 class="product-card-price">${product.price}</h5>
          </div>
          <div class="product-card-footer">
            <button class="add-to-cart">Add to cart</button>
          </div>
        </div>
  `;
  return document.createRange().createContextualFragment(html);
}

function displayProducts(productListArray) {
  const productCards = document.querySelector('.product-cards');
  productListArray.map((product) => {
    productCards.append(productToHtmlElement(product));
  });
}

const productList = [
  {
    productId: 1,
    productName: 'Fancy Chocolate Cake',
    price: '$10.44',
    image: 'https://images.unsplash.com/photo-1586985289906-406988974504?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    category: 'cake',
  },
  {
    productId: 2,
    productName: 'Bon Bon Chocolate',
    price: '$6.99',
    image: 'https://images.unsplash.com/photo-1583312228158-4001fca6e316?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
    category: 'sweets',
  },
  {
    productId: 3,
    productName: 'Unicorn Cupcake',
    price: '$3.22',
    image: 'https://images.unsplash.com/photo-1566864399117-22c449669089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    category: 'cupcake',
  },
  {
    productId: 4,
    productName: 'High-end Doughnut',
    price: '$10.44',
    image: 'https://images.unsplash.com/photo-1554886729-1a57f2750570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    category: 'doughnut',
  },
  {
    productId: 5,
    productName: 'Fancy Chocolate Cake',
    price: '$10.44',
    image: 'https://images.unsplash.com/photo-1586985289906-406988974504?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    category: 'cake',
  },
  {
    productId: 6,
    productName: 'Bon Bon Chocolate',
    price: '$6.99',
    image: 'https://images.unsplash.com/photo-1583312228158-4001fca6e316?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
    category: 'sweets',
  },
  {
    productId: 7,
    productName: 'Unicorn Cupcake',
    price: '$3.22',
    image: 'https://images.unsplash.com/photo-1566864399117-22c449669089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    category: 'cupcake',
  },
  {
    productId: 8,
    productName: 'High-end Doughnut',
    price: '$10.44',
    image: 'https://images.unsplash.com/photo-1554886729-1a57f2750570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    category: 'doughnut',
  },
];

export { productList, displayProducts, productToHtmlElement };
