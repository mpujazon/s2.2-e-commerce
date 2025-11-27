const buttons = [...document.getElementsByClassName('add-to-cart')]; 
const cleanCartButton = document.getElementById('clean-cart');
const countProduct = document.getElementById('count_product');

cleanCartButton.addEventListener('click', cleanCart);

// Exercise 5
const cartButton = document.querySelector('.cart-button');
const totalPrice = document.getElementById('total_price');
const cartList = document.getElementById('cart_list');

const printCart = () => {
    cartList.innerHTML = '';
    cart.forEach((product) => {
        let productRow = document.createElement('tr');
        productRow.innerHTML = `
            <tr>
                <th scope="row">${capitalizeFirstLetter(product.name)}</th>
                <td>$${(product.price)}</td>
                <td class='w-2'>
                    <button type="button" class="btn btn-sm btn-secondary decrement-quantity" product-id='${product.id}'>-</button>
                    ${product.quantity}
                    <button type="button" class="btn btn-sm btn-secondary increment-quantity" product-id='${product.id}'>+</button>
                </td>
                <td>$${(product.subtotalWithDiscount)?.toFixed(2) || (product.price * product.quantity).toFixed(2)}</td>
            </tr>
        `;        
        cartList.appendChild(productRow);
    });
    dynamicDecrementEventListener();    
    dynamicIncrementEventListener();
    totalPrice.innerHTML = total.toFixed(2);
}
cartButton.addEventListener('click', printCart);

const capitalizeFirstLetter = (val)=>  {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

// ** Nivell II **

// Exercise 7
let decrementButtons = [];

const dynamicDecrementEventListener = () => {
    decrementButtons = [...document.getElementsByClassName('decrement-quantity')];
    
    decrementButtons.forEach((button)=>{
        button.addEventListener('click', removeFromCart);
    })
}

// Extra: Increment Button
let incrementButtons = [];

const dynamicIncrementEventListener = () => {
    incrementButtons = [...document.getElementsByClassName('increment-quantity')];
    
    incrementButtons.forEach((button)=>{
        button.addEventListener('click', addFromCart);
    })
}
