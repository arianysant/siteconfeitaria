  const products=[{
    id: 'PRO1234100',
    image:'imgs/redvel.jpeg',
    name: 'Bolo Red Velvet',
    quantity: 1,
    price: 'Isso é um sabor pra você se inspirar'
  },
  {
    id: 'PRO1234101',
    image:'imgs/strawbery.jpeg',
    name: 'Chocolate com morango',
    quantity: 1,
    price: 'Isso é um sabor pra você se inspirar'
  }, 
  {
    id: 'PRO1234102',
    image:'imgs/cherry.jpg',
    name: 'Bolo de maracujá',
    quantity: 1,
    price: 'Isso é um sabor pra você se inspirar'
  },
  {
    id: 'PRO1234103',
    image:'imgs/chocolate.jpg',
    name:'Bolo de chocolate',
    quantity: 1,
    price: 'Isso é um sabor pra você se inspirar'
  },
  {
    id: 'PRO1234104',
    image:'imgs/brow.png',
    name:'Brownie',
    quantity: 1,
    price: 'Isso é um sabor pra você se inspirar'
  },
  {
    id: 'PRO1234105',
    image:'imgs/kiwi.jpg',
    name:'Bolo de Kiwi',
    quantity: 1,
    price: 'Isso é um sabor pra você se inspirar'
  },
  {
    id: 'PRO1234106',
    image:'imgs/fruit.jpg',
    name:'Bolo de frutas',
    quantity: 1,
    price: 'Isso é um sabor pra você se inspirar'
  },
  {
    id: 'PRO1234107',
    image:'imgs/dryfruits.jpeg',
    name:'Torta',
    quantity: 1,
    price: 'Isso é um sabor pra você se inspirar'
  }
];

let productsHTML='';

products.forEach((product) => {
  productsHTML +=`
  <div class="pro" data-product-id="${product.id}" data-product-name="${product.name}" data-product-img="${product.image}" data-product-price="${product.price}" data-product-quantity=1 >
              <img src="${product.image}" alt="">
              <div class="des">
                  <h5>${product.name}</h5>
                  <div class="star">
                
                  </div>
                  <h4> ${product.price}</h4>
              </div>
              
              <div class="js-add-to-cart cart" 
              data-product-id="${product.id}"
              data-product-name="${product.name}"
              data-product-img="${product.image}"
              data-product-price="${product.price}"
              data-product-quantity="${product.quantity}">
                  <i class="fa-solid fa-cart-shopping"></i>
              </div>
          </div>
  `;
});

document.querySelector('.js-pro-cont').innerHTML= productsHTML;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click',()=>{
      console.log('hjsgh');
      const productId=button.dataset.productId;
      const productName=button.dataset.productName;
      const productImg=button.dataset.productImg;
      const productPrice=button.dataset.productPrice;
      const productQuantity=Number(document.querySelector('.js-single-cart-quantity').value)||Number(button.dataset.productQuantity);

      let matchingItem;

      const cartProducts=JSON.parse(localStorage.getItem('cartProducts')) || [];

      cartProducts.forEach((item) =>{
        if(productId === item.productId){
          matchingItem=item;
        }
      });
      if(matchingItem){
        matchingItem.productQuantity+=productQuantity;
      }else{
        cartProducts.push({
          productId:productId,
          productName:productName,
          productImg:productImg,
          productPrice:productPrice,
          productQuantity:productQuantity
        });
      }

      console.log(cartProducts);
      localStorage.setItem('cartProducts',JSON.stringify(cartProducts));  
      load_cart_quantity();
  });
});

document.querySelectorAll('.js-cart-click').forEach((carticon)=>{
  carticon.addEventListener('click',()=>{
    window.location.href='cart.html';
  });
});

document.querySelectorAll('.pro').forEach((product) => {
  product.addEventListener('click', () => {
    const productId = product.dataset.productId;
    const productName = product.dataset.productName;
    const productImage = product.dataset.productImg;
    const productPrice = product.dataset.productPrice;
    const productQuantity = product.dataset.productQuantity;

    console.log({
      id: productId,
      name: productName,
      image: productImage,
      price: productPrice,
      quantity: productQuantity
    });

    const queryParams = new URLSearchParams();
    queryParams.append('id', productId);
    queryParams.append('name', productName);
    queryParams.append('image', productImage);
    queryParams.append('price', productPrice);
    queryParams.append('quantity', productQuantity);

    window.location.href = `montar.html?${queryParams.toString()}`;
  });
});
