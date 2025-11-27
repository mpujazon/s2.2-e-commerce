// Exercise 1
const countProduct = document.getElementById('count_product');
export const updateCartCount = (cartLength=0) => { countProduct.textContent = cartLength }

// Exercise 5
const totalPriceElement = document.getElementById('total_price');
const cartList = document.getElementById('cart_list');

export const printCart = (cart, totalPrice) => {
    cartList.innerHTML = '';
    cart.forEach((product) => {
        const productRow = document.createElement('tr');
        productRow.innerHTML = `
            <tr>
                <th scope="row">${capitalizeFirstLetter(product.name)}</th>
                <td>$${(product.price)}</td>
                <td class='w-2'>
                    <button type="button" class="btn btn-sm btn-secondary decrement-quantity" product-id='${product.id}'>-</button>
                    ${product.quantity}
                    <button type="button" class="btn btn-sm btn-secondary increment-quantity" product-id='${product.id}'>+</button>
                </td>
                <td>$${(product.subtotalPrice).toFixed(2)}</td>
            </tr>
        `;        
        cartList.appendChild(productRow);
    });
    // dynamicDecrementEventListener();    
    // dynamicIncrementEventListener();
    totalPriceElement.innerHTML = totalPrice.toFixed(2);
}

const capitalizeFirstLetter = (val)=>  {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

// // ** Nivell II **

// // Exercise 7
// let decrementButtons = [];

// const dynamicDecrementEventListener = () => {
//     decrementButtons = [...document.getElementsByClassName('decrement-quantity')];
    
//     decrementButtons.forEach((button)=>{
//         button.addEventListener('click', removeFromCart);
//     })
// }

// // Extra: Increment Button
// let incrementButtons = [];

// const dynamicIncrementEventListener = () => {
//     incrementButtons = [...document.getElementsByClassName('increment-quantity')];
    
//     incrementButtons.forEach((button)=>{
//         button.addEventListener('click', addFromCart);
//     })
// }
