import { products } from "./data.js";
import { printCart } from "./ui.js";

const cart = [];
export const getCart = () => cart;

let totalPrice = 0;
export const getTotalPrice = () => totalPrice;

const updateLocalStorageCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart))
}

const getLocalStorageCart = () => JSON.parse(localStorage.getItem('cart'));


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
        cart.push({...product, quantity:1, subtotalPrice: product.price});
    }
    calculateTotal();
}

const getProductOnCart = (product) => cart.find((cartProduct)=> product.id === cartProduct.id);

// Exercise 2
export const clearCart = () =>  {
    cart.length = 0;
    calculateTotal();
}

// Exercise 3
export const calculateTotal = () =>  {
    totalPrice = cart.reduce((acc, product)=> acc += product.subtotalPrice, 0);
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
    const productOnCart = cart.find((product)=> product.id === id);
    if(productOnCart.quantity === 1){
        const index = cart.indexOf(productOnCart);
        cart.splice(index,1);
    }else{
        productOnCart.quantity --;
        calculateSubtotal(productOnCart);
    }
    calculateTotal();
    printCart(cart, totalPrice);
}

// Extra: Increment button
export const addFromCart = (event) => {
    let id = Number(event.currentTarget.getAttribute('product-id'));   
    let productOnCart = cart.find((product)=> product.id === id);
    addProductToCart(productOnCart);
    printCart(cart, totalPrice);
}