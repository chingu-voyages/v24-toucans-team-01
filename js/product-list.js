function productToHtmlElement(product) {
  const html = `
        <div class="product-card" data-category="${product.category}" data-id="${product.productId}">
          <img class="product-card-image" src="${product.image}" data-toggle="modal" data-target="#product${product.productId}" />
          <div class="product-card-body">
            <h5 class="product-card-name">${product.productName}</h5>
            <h5 class="product-card-price">${product.price}</h5>
          </div>
          <div class="product-card-footer">
            <button class="add-to-cart">Add to cart</button>
          </div>
        </div>
        <!-- The Modal -->
        <div class="modal product-desc" id="product${product.productId}" data-category="${product.category}" data-id="${product.productId}">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header product-desc-header">
                <button type="button" class="btn-close product-desc-close" data-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body row">
                <div class="col-lg-6">
                  <img class="img-fluid" src="${product.image}"/>
                </div>
                <div class="col-lg-6 product-desc-content">
                  <div>
                  <h5 class="pt-0">${product.productName}</h5>
                  <p class="p-2">${product.description}</p>
                  <h6 class="p-2">Ingredients</h6>
                  <p class="p-2 pb-lg-5">${product.ingredients}</p>
                  </div>
                  <div class="row justify-content-between">                  
                    <h5 class="col-6">${product.price}</h5>                  
                    <button class="add-to-cart col-6">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
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
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    ingredients: `Cupcake ipsum dolor sit. Amet carrot cake apple pie. Pie croissant gingerbread carrot cake dragée.`,
  },
  {
    productId: 2,
    productName: 'Bon Bon Chocolate',
    price: '$6.99',
    image: 'https://images.unsplash.com/photo-1583312228158-4001fca6e316?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
    category: 'sweets',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    ingredients: `Cupcake ipsum dolor sit. Amet carrot cake apple pie. Pie croissant gingerbread carrot cake dragée.`,
  },
  {
    productId: 3,
    productName: 'Unicorn Cupcake',
    price: '$3.22',
    image: 'https://images.unsplash.com/photo-1566864399117-22c449669089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    category: 'cupcake',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    ingredients: `Cupcake ipsum dolor sit. Amet carrot cake apple pie. Pie croissant gingerbread carrot cake dragée.`,
  },
  {
    productId: 4,
    productName: 'High-end Doughnut',
    price: '$10.44',
    image: 'https://images.unsplash.com/photo-1554886729-1a57f2750570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    category: 'doughnut',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    ingredients: `Cupcake ipsum dolor sit. Amet carrot cake apple pie. Pie croissant gingerbread carrot cake dragée.`,
  },
  {
    productId: 5,
    productName: 'Fancy Chocolate Cake',
    price: '$10.44',
    image: 'https://images.unsplash.com/photo-1586985289906-406988974504?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    category: 'cake',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    ingredients: `Cupcake ipsum dolor sit. Amet carrot cake apple pie. Pie croissant gingerbread carrot cake dragée.`,
  },
  {
    productId: 6,
    productName: 'Bon Bon Chocolate',
    price: '$6.99',
    image: 'https://images.unsplash.com/photo-1583312228158-4001fca6e316?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
    category: 'sweets',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    ingredients: `Cupcake ipsum dolor sit. Amet carrot cake apple pie. Pie croissant gingerbread carrot cake dragée.`,
  },
  {
    productId: 7,
    productName: 'Unicorn Cupcake',
    price: '$3.22',
    image: 'https://images.unsplash.com/photo-1566864399117-22c449669089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    category: 'cupcake',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    ingredients: `Cupcake ipsum dolor sit. Amet carrot cake apple pie. Pie croissant gingerbread carrot cake dragée.`,
  },
  {
    productId: 8,
    productName: 'High-end Doughnut',
    price: '$10.44',
    image: 'https://images.unsplash.com/photo-1554886729-1a57f2750570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    category: 'doughnut',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    ingredients: `Cupcake ipsum dolor sit. Amet carrot cake apple pie. Pie croissant gingerbread carrot cake dragée.`,
  },
];

export { productList, displayProducts, productToHtmlElement };
