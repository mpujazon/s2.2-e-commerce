import { products } from "./data.js";

const cart = [];
let totalPrice = 0;


// Exercise 1
const getProduct = (productId) => {
    const product = products.find((product) => product.id === productId);
    if (product) return product;
    throw new Error (`Product with ${productId} does not exist.`);
}

// Exercise 1
const buy = (id) => {
    let productToBuy = products.find((product) => product.id === id);
    let productOnCart = cart.find((product)=> product.id === productToBuy.id);   
    
    productOnCart!=undefined?
        (productOnCart.quantity++)
        :(cart.push({...productToBuy, quantity: 1}));
    countProduct.textContent = cart.length;
    calculateTotal();
}
export const handleProductAddition = (event) => {
    let productId = Number(event.target.getAttribute('data-product-id'));
    buy(productId);
}

// Exercise 2
export const cleanCart = () =>  {
    cart.length = 0;
    total = 0;
    countProduct.textContent = 0;
    printCart();
}

// Exercise 3
const calculateTotal = () =>  {
    applyPromotionsCart();
    total = 0;
    cart.forEach((product)=>{
        let productSubtotal = product.subtotalWithDiscount || product.price*product.quantity;
        total += productSubtotal;
    });
}

// Exercise 4
const applyPromotionsCart = () =>  {
    cart.forEach(product => {
        if(product.offer) discountProductPrice(product);
    });
}

const discountProductPrice = (product) => {
    let originalProduct = products.find((originalProduct)=>originalProduct.id === product.id);

    if (product.quantity >= product.offer.number){
        product.subtotalWithDiscount = (product.price - product.price/100*product.offer.percent) * product.quantity;
    }else{
        product.subtotalWithDiscount = null;
    }
}

// Exercise 7
const removeFromCart = (event) => {
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