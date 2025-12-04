import { products } from "./data.js";
import { handleCartButtonsState } from "./index.js";
import { printCart, updateCartCount } from "./ui.js";


export const getCart = () => cart.products;

export const getTotalPrice = () => cart.totalPrice;

export const getLocalStorageCart = () => {
    const localStorageCart = JSON.parse(localStorage.getItem('cart'));
    updateCartCount(localStorageCart.products.length);
    return localStorageCart;
} 

const cart =  getLocalStorageCart() || { products: [], totalPrice:0 };

export const updateLocalStorageCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount(cart.products.length);

}

// Exercise 1
export const getProduct = (productId) => {
    const product = products.find((product) => product.id === productId);
    if (product) return product;
    throw new Error (`Product with ${productId} does not exist.`);
}

export const addProductToCart = (product)=>{
    const productOnCart = getProductOnCart(product);
    if (productOnCart){
        productOnCart.quantity ++;
        calculateSubtotal(productOnCart);
    }else{
        cart.products.push({...product, quantity:1, subtotalPrice: product.price});
    }
    calculateTotal();
}

const getProductOnCart = (product) => cart.products.find((cartProduct)=> product.id === cartProduct.id);

// Exercise 2
export const clearCart = () =>  {
    cart.products.length = 0;
    calculateTotal();
}

// Exercise 3
export const calculateTotal = () =>  {
    cart.totalPrice = cart.products.reduce((acc, product)=> acc += product.subtotalPrice, 0);
    updateLocalStorageCart();
    handleCartButtonsState();
}
const calculateSubtotal = (cartProduct) => {
    cartProduct.quantity >= cartProduct.offer?.number?
        cartProduct.subtotalPrice = getDiscountedPrice(cartProduct) * cartProduct.quantity
        : cartProduct.subtotalPrice = cartProduct.price * cartProduct.quantity; 
}

// Exercise 4
const getDiscountedPrice = (product) =>  {
    return product.price - product.price/100*product.offer.percent;
}

// Exercise 7
export const removeFromCart = (event) => {
    const id = Number(event.currentTarget.getAttribute('product-id'));   
    const productOnCart = cart.products.find((product)=> product.id === id);
    if(productOnCart.quantity === 1){
        const index = cart.products.indexOf(productOnCart);
        cart.products.splice(index,1);
    }else{
        productOnCart.quantity--;
        calculateSubtotal(productOnCart);
    }
    calculateTotal();
    printCart(getCart(), getTotalPrice());
}

// Extra: Increment button
export const addFromCart = (event) => {
    let id = Number(event.currentTarget.getAttribute('product-id'));   
    let productOnCart = cart.products.find((product)=> product.id === id);
    addProductToCart(productOnCart);
    printCart(getCart(), getTotalPrice());
}

// Extra: Disable cart buttons
export const isCartEmpty = () => cart.products.length === 0;