import { getProduct,addProductToCart, getCart, clearCart, getTotalPrice, isCartEmpty} from "./logic.js";
import { updateCartCount, printCart, enableCartButtonsState, showProductAddedMessage } from "./ui.js";

const handleBuyProduct = (event) => {
    const productId = Number(event.target.getAttribute('data-product-id'));
    addProductToCart(getProduct(productId));
    updateCartCount(getCart().length);
    showProductAddedMessage();
    handleCartButtonsState();
}
const buttons = [...document.getElementsByClassName('add-to-cart')]; 
buttons.forEach((button)=>{
    button.addEventListener("click", handleBuyProduct);
}); 

const handleClearCart = () => {
    clearCart();
    updateCartCount()
    printCart(getCart(), getTotalPrice());
    handleCartButtonsState();
}
const clearCartButton = document.getElementById('clean-cart');
clearCartButton?.addEventListener('click', handleClearCart);

const cartButton = document.querySelector('.cart-button');
cartButton?.addEventListener('click', ()=> printCart(getCart(), getTotalPrice()));

export const addDynamicEventListener = (buttonsClassName, eventListenerFunction) => {
    const buttons = [...document.getElementsByClassName(buttonsClassName)];
    buttons.forEach((button)=>{
        button.addEventListener('click', eventListenerFunction);
    })
}

export const handleCartButtonsState = () => {
    isCartEmpty()?
        enableCartButtonsState(false)
        :enableCartButtonsState(true);
}

const redirectToCheckoutPage = () => {
    window.location.assign("./checkout.html");
}
const checkoutButton = document.getElementById('checkout-btn');
checkoutButton?.addEventListener('click', redirectToCheckoutPage);