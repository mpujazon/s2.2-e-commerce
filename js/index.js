import { getProduct,addProductToCart, getCart, clearCart} from "./logic.js";
import { updateCartCount } from "./ui.js";

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
    calculateTotal();
    updateCartCount()
    printCart();
}
const clearCartButton = document.getElementById('clean-cart');
clearCartButton.addEventListener('click', handleClearCart);