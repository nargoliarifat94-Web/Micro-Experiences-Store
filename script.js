// Cart & Modal
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const viewDetailsButtons = document.querySelectorAll('.view-details');
const cartItemsContainer = document.getElementById('cart-items');
const totalSpan = document.getElementById('total');

const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalClose = document.querySelector('.close');

let cart = [];
let total = 0;

// Add to Cart with quantity
addToCartButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const productCard = e.target.parentElement;
        const name = productCard.querySelector('h3').innerText;
        const price = parseInt(productCard.dataset.price);

        // Check if already in cart
        const existing = cart.find(item => item.name === name);
        if(existing){
            existing.quantity += 1;
        } else {
            cart.push({ name, price, quantity: 1 });
        }

        updateCart();
    });
});

function updateCart() {
    cartItemsContainer.innerHTML = '';
    total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;

        const div = document.createElement('div');
        div.innerHTML = `
            ${item.name} - ₹${item.price} x ${item.quantity}
            <button onclick="increaseQty(${index})">+</button>
            <button onclick="decreaseQty(${index})">-</button>
            <button onclick="removeItem(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(div);
    });

    totalSpan.innerText = total;
}

// Quantity & Remove Functions
window.increaseQty = function(index){
    cart[index].quantity += 1;
    updateCart();
}

window.decreaseQty = function(index){
    if(cart[index].quantity > 1){
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1);
    }
    updateCart();
}

window.removeItem = function(index){
    cart.splice(index, 1);
    updateCart();
}

// Checkout
document.getElementById('checkout').addEventListener('click', () => {
    if(cart.length === 0){
        alert("Your cart is empty!");
        return;
    }
    alert(`Thank you for purchasing! Total: ₹${total}`);
    cart = [];
    updateCart();
});

// Modal Functionality
viewDetailsButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const productCard = e.target.parentElement;
        modalImg.src = productCard.dataset.img;
        modalTitle.innerText = productCard.querySelector('h3').innerText;
        modalDesc.innerText = productCard.dataset.desc;
        modal.style.display = 'block';
    });
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if(e.target === modal) modal.style.display = 'none';
});
