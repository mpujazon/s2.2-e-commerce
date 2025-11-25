import { products } from "./data.js";

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];
const total = 0;

const buttons = [...document.getElementsByClassName('add-to-cart')]; 
const cleanCartButton = document.getElementById('clean-cart');


// Exercise 1
const buy = (id) => {
    let productToBuy = products.find((product) => product.id === id);
    let productOnCart = cart.find((product)=> product.id === productToBuy.id);   
    
    productOnCart!=undefined?
        (productOnCart.quantity++)
        :(cart.push({...productToBuy, quantity: 1}));   
    console.log(cart);
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
}
cleanCartButton.addEventListener('click', cleanCart);

// Exercise 3
const calculateTotal = () =>  {
    // Calculate total price of the cart using the "cartList" array
}

// Exercise 4
const applyPromotionsCart = () =>  {
    // Apply promotions to each item in the array "cart"
}

// Exercise 5
const printCart = () => {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
const removeFromCart = (id) => {

}

const open_modal = () =>  {
    printCart();
}