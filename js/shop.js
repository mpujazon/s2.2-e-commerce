import { products } from "./data.js";

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];
let total = 0;

const buttons = [...document.getElementsByClassName('add-to-cart')]; 
const cleanCartButton = document.getElementById('clean-cart');
const countProduct = document.getElementById('count_product');


// Exercise 1
const buy = (id) => {
    let productToBuy = products.find((product) => product.id === id);
    let productOnCart = cart.find((product)=> product.id === productToBuy.id);   
    
    productOnCart!=undefined?
        (productOnCart.quantity++)
        :(cart.push({...productToBuy, quantity: 1}));
    countProduct.textContent = cart.length;
    applyPromotionsCart();
    calculateTotal();
}
const handleProductAddition = (event) => {
    let productId = Number(event.target.getAttribute('data-product-id'));
    buy(productId);
}
buttons.forEach((button)=>{
    button.addEventListener("click", handleProductAddition);
});

// Exercise 2
const cleanCart = () =>  {
    cart.length = 0;
    total = 0;
    countProduct.textContent = 0;
    printCart();
}
cleanCartButton.addEventListener('click', cleanCart);

// Exercise 3
const calculateTotal = () =>  {
    total = 0;
    cart.forEach((product)=>{
        let productSubtotal = product.subtotalWithDiscount || product.price*product.quantity;
        total += productSubtotal;
    })
    console.log(total);
}

// Exercise 4
const applyPromotionsCart = () =>  {
    cart.forEach(product => {
        if(product.offer) discountProductPrice(product);
    });
}

const discountProductPrice = (product) => {
    let originalProduct = products.find((originalProduct)=>originalProduct.id === product.id);

    if (product.quantity >= product.offer.number){
        product.subtotalWithDiscount = (product.price - product.price/100*product.offer.percent) * product.quantity;
    }
}

// Exercise 5
const cartButton = document.querySelector('.cart-button');
const totalPrice = document.getElementById('total_price');
const cartList = document.getElementById('cart_list');

const printCart = () => {
    cartList.innerHTML = '';
    cart.forEach((product) => {
        let productRow = document.createElement('tr');
        productRow.innerHTML = `
            <tr>
                <th scope="row">${capitalizeFirstLetter(product.name)}</th>
                <td>$${(product.price)}</td>
                <td>${product.quantity}</td>
                <td>$${(product.subtotalWithDiscount)?.toFixed(2) || (product.price * product.quantity).toFixed(2)}</td>
            </tr>
        `;        
        cartList.appendChild(productRow);
    });
    totalPrice.innerHTML = total.toFixed(2);
}
cartButton.addEventListener('click', printCart);


const capitalizeFirstLetter = (val)=>  {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}



// ** Nivell II **

// Exercise 7
const removeFromCart = (id) => {

}

const open_modal = () =>  {
    printCart();
}