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

    this.productListArray.map((product, index) => {
      const productToElement = this.productToHtmlElement(product, index);
      productCards.append(productToElement);
    });

    productModal.querySelector('.product-carousel-arrow-left').addEventListener('click', (e) => {
      this.defaultHander(e);
      this.arrowHandler(productModal, lastIndex, true);
    });

    productModal.querySelector('.product-carousel-arrow-right').addEventListener('click', (e) => {
      this.defaultHander(e);
      this.arrowHandler(productModal, lastIndex, false);
    });

    productCards.addEventListener('click', (e) => {
      this.defaultHander(e);
      if (e.target.matches('.product-card-image')) {
        this.modalUpdate(productModal, e.target.closest('.product-card').dataset.arrayindex);
      }
    });
  }

  arrowHandler(productModal, lastIndex, left) {
    let index = Number(productModal.dataset.arrayindex);
    let itemIndex = 0;

    if (left) {
      itemIndex = index > 0 ? index - 1 : lastIndex;
    } else {
      itemIndex = index < lastIndex ? index + 1 : 0;
    }
    this.modalUpdate(productModal, itemIndex);
    return (index = itemIndex);
  }
  defaultHander(e) {
    e.stopPropagation();
    e.preventDefault();
  }
  modalUpdate(productModal, targetIndex) {
    
    const targetItem = this.productListArray[targetIndex];
    productModal.dataset.arrayindex = targetIndex;
    productModal.dataset.category = targetItem.category;
    productModal.dataset.id = targetItem.productId;
    productModal.querySelector('img').src = targetItem.image;
    productModal.querySelector('.product-desc-content').children[0].innerText = targetItem.productName;
    productModal.querySelector('.product-desc-content').children[1].innerText = targetItem.description;
    productModal.querySelector('.product-desc-content').children[3].innerText = targetItem.ingredients;
    productModal.querySelector('.price-qty>h5').innerText = targetItem.price;
  }
}

const productList = [
  {
    productId: 1,
    productName: 'Fancy Chocolate Cake',
    price: '$10.44',
    image: 'https://images.unsplash.com/photo-1586985289906-406988974504?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    category: 'cake',
    description: `Chocolate cake Quas aliquando ei per, vix libris adolescens an. Eu vis porro assum necessitatibus, ius dicant intellegam delicatissimi ex, tempor convenire accusamus eu nec. Atqui essent eam ei, tamquam sententiae his an. Pri ei erroribus expetendis, no cum vidisse ocurreret patrioque, tale vidit luptatum per eu. Mei ut natum regione atomorum, erant dolorem ad has. Quo at aeterno ullamcorper, ne discere iracundia laboramus vix, eum cu legere deseruisse. Et qui probo tamquam, pro et perfecto dissentiet, ut moderatius delicatissimi vis..`,
    ingredients: `Chocolate cake Graeco pericula iracundia ea mea. Ex nec feugiat lucilius. Ne qui reque nominati referrentur. Accusata accusamus mea ea, periculis disputationi sea an.`,
  },
  {
    productId: 2,
    productName: 'Bon Bon Chocolate',
    price: '$6.99',
    image: 'https://images.unsplash.com/photo-1583312228158-4001fca6e316?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
    category: 'sweets',
    description: `Bon Bon Chocolate Ea aperiri platonem vis, in exerci nusquam indoctum nam. Regione gubergren mnesarchum at sit, tacimates indoctum constituam cu eos. Constituam concludaturque his id. Habemus singulis contentiones at vis, pro delenit platonem ad, mea nobis facilisi signiferumque ei. Ei usu quodsi vivendum facilisi, cu menandri patrioque mel, at facer corrumpit mea. Ullum aeque id duo, an nam dolore mnesarchum.`,
    ingredients: `Bon Bon Chocolate Ex vim nibh gubergren. Ei omnium assueverit mel. Eos et natum doctus appareat, an consul utroque reprimique vix, ne mea clita tamquam. Doctus pertinacia theophrastus eum an, eu eum phaedrum accusata.`,
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
    description: `Doughnut Porro euismod facilis ad est, ipsum dicunt singulis vis ad, quaestio democritum vituperatoribus sea ex. Possit blandit eos cu, mutat iuvaret mei at. No harum aliquip detracto vel, ei vulputate scribentur vix, eum et dico appetere sadipscing. Ex vel laudem graeci. Mei ea dicant offendit vivendum, est veniam aliquid consequuntur et.`,
    ingredients: `Doughnut Eam omnis ipsum denique no, sint eripuit et nam. Mel in consulatu gloriatur, soluta atomorum voluptatibus no vix, ipsum vocibus neglegentur est in. Ad congue civibus similique sed, ei tantas scripserit vix. `,
  },
  {
    productId: 5,
    productName: 'Fancy Chocolate Cake',
    price: '$10.44',
    image: 'https://images.unsplash.com/photo-1586985289906-406988974504?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    category: 'cake',
    description: `Chocolate cake Quas aliquando ei per, vix libris adolescens an. Eu vis porro assum necessitatibus, ius dicant intellegam delicatissimi ex, tempor convenire accusamus eu nec. Atqui essent eam ei, tamquam sententiae his an. Pri ei erroribus expetendis, no cum vidisse ocurreret patrioque, tale vidit luptatum per eu. Mei ut natum regione atomorum, erant dolorem ad has. Quo at aeterno ullamcorper, ne discere iracundia laboramus vix, eum cu legere deseruisse. Et qui probo tamquam, pro et perfecto dissentiet, ut moderatius delicatissimi vis.`,
    ingredients: `Chocolate cakeChocolate cake Graeco pericula iracundia ea mea. Ex nec feugiat lucilius. Ne qui reque nominati referrentur. Accusata accusamus mea ea, periculis disputationi sea an.`,
  },
  {
    productId: 6,
    productName: 'Bon Bon Chocolate',
    price: '$6.99',
    image: 'https://images.unsplash.com/photo-1583312228158-4001fca6e316?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
    category: 'sweets',
    description: `Bon Bon Chocolate Ea aperiri platonem vis, in exerci nusquam indoctum nam. Regione gubergren mnesarchum at sit, tacimates indoctum constituam cu eos. Constituam concludaturque his id. Habemus singulis contentiones at vis, pro delenit platonem ad, mea nobis facilisi signiferumque ei. Ei usu quodsi vivendum facilisi, cu menandri patrioque mel, at facer corrumpit mea. Ullum aeque id duo, an nam dolore mnesarchum.`,
    ingredients: `Bon Bon Chocolate Ex vim nibh gubergren. Ei omnium assueverit mel. Eos et natum doctus appareat, an consul utroque reprimique vix, ne mea clita tamquam. Doctus pertinacia theophrastus eum an, eu eum phaedrum accusata.`,
  },
  {
    productId: 7,
    productName: 'Unicorn Cupcake',
    price: '$3.22',
    image: 'https://images.unsplash.com/photo-1566864399117-22c449669089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    category: 'cupcake',
    description: `Cupcake Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    ingredients: `Cupcake ipsum dolor sit. Amet carrot cake apple pie. Pie croissant gingerbread carrot cake dragée.`,
  },
  {
    productId: 8,
    productName: 'High-end Doughnut',
    price: '$10.44',
    image: 'https://images.unsplash.com/photo-1554886729-1a57f2750570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    category: 'doughnut',
    description: `Doughnut Porro euismod facilis ad est, ipsum dicunt singulis vis ad, quaestio democritum vituperatoribus sea ex. Possit blandit eos cu, mutat iuvaret mei at. No harum aliquip detracto vel, ei vulputate scribentur vix, eum et dico appetere sadipscing. Ex vel laudem graeci. Mei ea dicant offendit vivendum, est veniam aliquid consequuntur et.`,
    ingredients: `Doughnut Eam omnis ipsum denique no, sint eripuit et nam. Mel in consulatu gloriatur, soluta atomorum voluptatibus no vix, ipsum vocibus neglegentur est in. Ad congue civibus similique sed, ei tantas scripserit vix. `,
  },
];

export { productList };