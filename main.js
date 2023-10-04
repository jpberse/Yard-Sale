const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const stripsMenu = document.querySelector('.strips-menu');
const shoppingCartMenu = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const arrowIcon = document.querySelector('.arrow-icon');
const cardsContainer = document.querySelector('.card-container');
const cartCounterSelect = document.querySelector('.cart-counter')

cartCounterSelect.innerText = '0'

navEmail.addEventListener('click', toggleDesktopMenu);
stripsMenu.addEventListener('click', toggleMobileMenu);
shoppingCartMenu.addEventListener('click', toggleCartAsideMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu() {
    const isAsideMenuClose = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideMenuClose){
        shoppingCartContainer.classList.add('inactive');
    }
    
    closeProductDetailAside();

    desktopMenu.classList.toggle('inactive');
    
    arrowIcon.classList.toggle('rotate');
}

function toggleMobileMenu() {
    const isAsideMenuClose = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideMenuClose){
        shoppingCartContainer.classList.add('inactive');
    } 

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCartAsideMenu() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');
    const isProductDetailAsideClose = productDetailContainer.classList.contains('inactive');

    if (!isMobileMenuClose) {
        mobileMenu.classList.add('inactive');
    } else if (!isDesktopMenuClose) {
        desktopMenu.classList.add('inactive');
    } else if (!isProductDetailAsideClose) {
        productDetailContainer.classList.add('inactive')
    }
    
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Dinner Table',
    price: 350,
    image: 'https://images.pexels.com/photos/1813502/pexels-photo-1813502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Sofa',
    price: 520,
    image: 'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg',
});
productList.push({
    name: 'Lamp',
    price: 35,
    image: 'https://images.pexels.com/photos/1125137/pexels-photo-1125137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Armchair',
    price: 180,
    image: 'https://images.pexels.com/photos/3705539/pexels-photo-3705539.jpeg',
});
productList.push({
    name: 'Mirror',
    price: 73,
    image: 'https://images.pexels.com/photos/3489131/pexels-photo-3489131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productDivInfo = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productDivInfo.appendChild(productPrice);
        productDivInfo.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.classList.add('add-cart-button');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productDivInfo);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

const addCartButton = document.querySelectorAll('.add-cart-button');

addCartButton.forEach((button) => {
    button.addEventListener('click', function(){
        console.log('clicked button!');
    })
})


