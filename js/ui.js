
const countProduct = document.getElementById('count_product');
export const updateCartCount = (cartLength) => { if(countProduct !== null) countProduct.textContent = cartLength }

const totalPriceElement = document.getElementById('total_price');
const cartList = document.getElementById('cart_list');

export const printCart = (container, localStorageCart, totalPriceElement, modifiable) => {
    container.innerHTML = '';
    localStorageCart.products.forEach((product) => {
        const productRow = document.createElement('tr');
        productRow.innerHTML = `
            <tr>
                <th scope="row" class="py-3 fw-semibold">${capitalizeFirstLetter(product.name)}</th>
                <td class="py-3">$${(product.price)}</td>
                <td class="py-3">
                    <div class="d-flex align-items-center gap-2">
                        ${modifiable? `<button type="button" class="btn btn-sm btn-outline-danger decrement-button" product-id='${product.id}'>-</button>`:``}
                        <span class="fw-bold">${product.quantity}</span>
                        ${modifiable? `<button type="button" class="btn btn-sm btn-outline-success increment-button" product-id='${product.id}'>+</button>`:``}
                    </div>
                </td>
                <td class="py-3 fw-semibold text-primary">$${(product.subtotalPrice).toFixed(2)}</td>
            </tr>
        `;        
        container.appendChild(productRow);
    });
    totalPriceElement.innerHTML = localStorageCart.totalPrice.toFixed(2);
}

const cartButtons = [...document.getElementsByClassName('cart-buttons')];

export const enableCartButtonsState = (enable) => {
    enable?
        cartButtons.forEach((button)=>{
            button.disabled = false;
        })
        :cartButtons.forEach((button)=>{
            button.disabled = true;
        })
}

const productMessageElement = document.getElementById('product-added-message');

export const showProductAddedMessage = () => {
    productMessageElement.classList.add('show');
    setTimeout(() => {
        productMessageElement.classList.remove('show');
    }, 3000);
}

export const capitalizeFirstLetter = (val)=>  {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}