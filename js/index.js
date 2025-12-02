import { getProduct,addProductToCart, getCart, clearCart, calculateTotal, getTotalPrice} from "./logic.js";
import { updateCartCount, printCart } from "./ui.js";

// Exercise 1
const handleBuyProduct = (event) => {
    const productId = Number(event.target.getAttribute('data-product-id'));
    addProductToCart(getProduct(productId));
    updateCartCount(getCart().length);
}
const buttons = [...document.getElementsByClassName('add-to-cart')]; 
buttons.forEach((button)=>{
    button.addEventListener("click", handleBuyProduct);
}); 

// Exercise 2
const handleClearCart = () => {
    clearCart();
    updateCartCount()
    printCart(getCart(), getTotalPrice());
}
const clearCartButton = document.getElementById('clean-cart');
clearCartButton?.addEventListener('click', handleClearCart);

// Exercise 5
const cartButton = document.querySelector('.cart-button');
cartButton?.addEventListener('click', ()=> printCart(getCart(), getTotalPrice()));

// Exercise 7
export const addDynamicEventListener = (buttonsClassName, eventListenerFunction) => {
    const buttons = [...document.getElementsByClassName(buttonsClassName)];
    buttons.forEach((button)=>{
        button.addEventListener('click', eventListenerFunction);
    })
}