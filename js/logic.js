import { products } from "./data.js";

const cart = [];
export const getCart = () => cart;

let totalPrice = 0;
export const getTotalPrice = () => totalPrice;


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
    if((cartProduct.quantity >= cartProduct.offer?.number) && !cartProduct.priceBeforeDiscount){
        applyDiscount(cartProduct);
    }
    cartProduct.subtotalPrice = cartProduct.price * cartProduct.quantity;
}

// Exercise 4
const applyDiscount = (product) =>  {
    product.priceBeforeDiscount = product.price;
    product.price = (product.price - product.price/100*product.offer.percent);
}

// Exercise 7
export const removeFromCart = (event) => {
    let id = Number(event.currentTarget.getAttribute('product-id'));   
    let product = cart.find((product)=> product.id === id);
    if(product.quantity === 1){
        let index = cart.indexOf(product);
        cart.splice(index,1);
    }else{
        product.quantity --;
    }
    calculateTotal();
    printCart();
}

// Extra: Increment button
const addFromCart = (event) => {
    let id = Number(event.currentTarget.getAttribute('product-id'));   
    let product = cart.find((product)=> product.id === id);
    product.quantity ++;
    calculateTotal();
    printCart();
}