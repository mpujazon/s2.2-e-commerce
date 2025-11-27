import { getProduct,addProductToCart, getCart, clearCart, calculateTotal} from "./logic.js";
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
    updateCartCount()
    printCart();
}
const clearCartButton = document.getElementById('clean-cart');
clearCartButton.addEventListener('click', handleClearCart);