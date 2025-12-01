import { addDynamicEventListener } from "./index.js";
import { addFromCart, removeFromCart } from "./logic.js";

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
                <th scope="row" class="py-3 fw-semibold">${capitalizeFirstLetter(product.name)}</th>
                <td class="py-3">$${(product.price)}</td>
                <td class="py-3">
                    <div class="d-flex align-items-center gap-2">
                        <button type="button" class="btn btn-sm btn-outline-danger decrement-button" product-id='${product.id}'>-</button>
                        <span class="fw-bold">${product.quantity}</span>
                        <button type="button" class="btn btn-sm btn-outline-success increment-button" product-id='${product.id}'>+</button>
                    </div>
                </td>
                <td class="py-3 fw-semibold text-primary">$${(product.subtotalPrice).toFixed(2)}</td>
            </tr>
        `;        
        cartList.appendChild(productRow);
    });
    addDynamicEventListener('decrement-button', removeFromCart);
    addDynamicEventListener('increment-button', addFromCart);
    totalPriceElement.innerHTML = totalPrice.toFixed(2);
}

const capitalizeFirstLetter = (val)=>  {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}