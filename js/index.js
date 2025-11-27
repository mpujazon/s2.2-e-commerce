import { getProduct,addProductToCart, getCart, cleanCart} from "./logic.js";
import { updateCartCount } from "./ui.js";

// Exercise 1
export const handleBuyProduct = (event) => {
    const productId = Number(event.target.getAttribute('data-product-id'));
    addProductToCart(getProduct(productId));
    updateCartCount(getCart().length);
}

const buttons = [...document.getElementsByClassName('add-to-cart')]; 
buttons.forEach((button)=>{
    button.addEventListener("click", handleBuyProduct);
});


// Exercise 2
const cleanCartButton = document.getElementById('clean-cart');
cleanCartButton.addEventListener('click', cleanCart);