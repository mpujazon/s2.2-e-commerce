import { getProduct,addProductToCart, getCart, clearCart, getTotalPrice, isCartEmpty, removeFromCart, addFromCart, getLocalStorageCart} from "./logic.js";
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


export const cartList = document.getElementById('cart_list');
export const totalPriceCartElement = document.getElementById('total_price');
const handleClearCart = () => {
    clearCart();
    updateCartCount()
    printCart(cartList, getLocalStorageCart(),totalPriceCartElement,true);
    handleCartButtonsState();
}
const clearCartButton = document.getElementById('clean-cart');
clearCartButton?.addEventListener('click', handleClearCart);

const cartButton = document.querySelector('.cart-button');
cartButton?.addEventListener('click', ()=> printCart(cartList, getLocalStorageCart(),totalPriceCartElement,true));

cartList?.addEventListener('click',(e)=>{
    if (e.target.classList.contains('decrement-button')){
        removeFromCart(e);
    }
    if (e.target.classList.contains('increment-button')){
        addFromCart(e);
    }
});

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