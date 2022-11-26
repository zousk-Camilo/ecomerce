//variables

let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');
let userInputNumber = 0;

plusBtn.addEventListener('click', ()=>{
  userInputNumber++;
  userInput.value = userInputNumber;
});

minusBtn.addEventListener('click', ()=>{
  userInputNumber--;
  if(userInputNumber <= 0){
    userInputNumber = 0;
  }
  userInput.value = userInputNumber;
});

//agregar al carrito ;;;
const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart-notification');
let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener('click', ()=>{  
  lastValue = lastValue + userInputNumber;
  cartNotification.innerText = lastValue;
  cartNotification.style.display = 'block';
  drowProduct();
  priceModal.innerHTML = `$125 x ${lastValue} <span>$${lastValue*125}.00</span>`
});

//mostrar el modal del carrito;;

const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
let priceModal = document.querySelector('.cart-modal__price');
const productContainer = document.querySelector('.cart-modal__checkout-container');

cartIconBtn.addEventListener('click', ()=>{
  cartModal.classList.toggle('show');

   if(lastValue == 0){
   productContainer.innerHTML =  `<p class = 'cart-empty'>your cart is empty</p>`;
   }else{
    drowProduct();
   }

});


//borrar el carrito;;
function deleteProductFunction(){

  const deleteProductBtn = document.querySelector('.cart-modal__delete-image');

deleteProductBtn.addEventListener('click', ()=>{
    productContainer.innerHTML = '<p class = "cart-empty">your cart is empty</p>';
    lastValue = 0;
    cartNotification.innerText = lastValue;
})


}




//cambiar las imagenes cuando se precionen los botones flecha;;;
const imageContainer = document.querySelector('.gallery__image-container');
const previusGalleryBtn = document.querySelector('.gallery__previus');
const nextGalleryBtn = document.querySelector('.gallery__next');
let imgIndex = 1;

const imageUrls = [
  "../images/image-product-1.jpg",
  "../images/image-product-2.jpg",
  "../images/image-product-3.jpg",
  "../images/image-product-4.jpg"
];

nextGalleryBtn.addEventListener('click', ()=>{
  changeNextImage(imageContainer);
})

previusGalleryBtn.addEventListener('click', ()=>{
  changePreviusImage(imageContainer);
});

//mostrar el modal de imagenes cuando se dan click en la imagen
const imageModal = document.querySelector('.modal-gallery__background');
const iconCloseModalBtn = document.querySelector('.modal-gallery__close');

imageContainer.addEventListener('click', ()=>{
  console.log('click en img container')
  imageModal.classList.toggle('displayGrid')
  
}); 

iconCloseModalBtn.addEventListener('click', ()=>{
  console.log('click en img container')
  imageModal.classList.toggle('displayGrid')
 
})

//cambiar las imagenes cuando doy click en las miniaturas;;;
let thumbnails = document.querySelectorAll('.gallery__thumnail')
thumbnails = [...thumbnails];

thumbnails.forEach(thumbnail =>{
  thumbnail.addEventListener('click', event=>{
    console.log(event.target.id);
    imageContainer.style.backgroundImage = `url("../images/image-product-${event.target.id}.jpg")`;   
  })
});


//cambiar las imagenes cuando se da click en las miniaturas en el modal;;;\
let modalThumbnails = document.querySelectorAll('.modal-gallery__thumnail');
const modalImgContainer = document.querySelector('.modal-gallery__image-container');
modalThumbnails = [...modalThumbnails];

modalThumbnails.forEach(modalThumnail => {
  modalThumnail.addEventListener('click', event=>{
    console.log(event.target.id.slice(-1))
    modalImgContainer.style.backgroundImage = `url("../images/image-product-${event.target.id.slice(-1)}.jpg")`;
  });
});

//cambiar las imagenes del modal por las flechas;;

const previusModalBtn = document.querySelector('.modal-gallery__previus');
const nextModalBtn = document.querySelector('.modal-gallery__image-next');

nextModalBtn.addEventListener('click', ()=>{
  changeNextImage(modalImgContainer);
});

previusModalBtn.addEventListener('click', ()=>{
  changePreviusImage(modalImgContainer);
});


//mostrar navbar cuando presiono el menu;;
const menuDeHamburg = document.querySelector('.header__menu');
let modalNavbar = document.querySelector('.modal-navbar__background');
let menu = document.querySelector('.modal-navbar');
let closeIconMenu = document.querySelector('.modal-navbar__close-icon');



menuDeHamburg.addEventListener('click', ()=>{
  console.log('click')
  modalNavbar.classList.toggle('showMenu');
  menu.classList.toggle('showMenu1');

});

closeIconMenu.addEventListener('click', ()=>{
  modalNavbar.classList.toggle('showMenu');
  menu.classList.toggle('showMenu1');
});

//funciones;;;

function drowProduct(){
  productContainer.innerHTML = `
      <div class="cart-modal__details-container">
      <img class = "cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="">
      <div>
        <p class="cart-modal__product">Autumn Limited Edition</p>
        <p class="cart-modal__price">$125 x ${lastValue} <span>$${lastValue*125}.00</span></p>
      </div>
      <img class="cart-modal__delete-image" src="./images/icon-delete.svg" alt="delete">
      </div>
      <button class="cart-modal__checkout">Checkout</button>`

      deleteProductFunction();
    };


function changeNextImage(imgContainer){
  imgIndex++
  if(imgIndex > 4){
    imgIndex = 1;
  }
  imgContainer.style.backgroundImage = `url("../images/image-product-${imgIndex}.jpg")` 
};

function changePreviusImage(imgContainer){
  imgIndex--;
  if(imgIndex == 0){
    imgIndex = 4
  }
  imgContainer.style.backgroundImage = `url("../images/image-product-${imgIndex}.jpg")`;   
};

