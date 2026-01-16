let cart = [];
let total = 0;

function addToCart(btn){
  let card = btn.parentElement;
  let name = card.dataset.name;
  let price = Number(card.dataset.price);

  cart.push({name, price});
  total += price;
  renderCart();
}

function renderCart(){
  let box = document.getElementById("cartItems");
  box.innerHTML = "";
  cart.forEach(i => {
    box.innerHTML += `<p>${i.name} - ₹${i.price}</p>`;
  });
  document.getElementById("total").innerText = total;
}

function checkout(){
  if(cart.length === 0){
    alert("Cart empty");
    return;
  }
  localStorage.setItem("totalAmount", total);
  window.location.href = "payment.html";
}

function toggleDark(){
  document.body.classList.toggle("dark");
}
