let cart = [];
let total = 0;

function hideLoader(){
  document.getElementById("loader").style.display="none";
}

function addToCart(btn){
  let card = btn.parentElement;
  cart.push({
    name: card.dataset.name,
    price: Number(card.dataset.price)
  });
  total += Number(card.dataset.price);
  renderCart();

  let toast=document.getElementById("toast");
  toast.style.display="block";
  setTimeout(()=>toast.style.display="none",1200);
}

function renderCart(){
  let box=document.getElementById("cartItems");
  box.innerHTML="";
  cart.forEach(i=>{
    box.innerHTML+=`<p>${i.name} - ₹${i.price}</p>`;
  });
  document.getElementById("total").innerText=total;
}

function checkout(){
  if(cart.length===0){alert("Cart empty");return;}
  localStorage.setItem("totalAmount",total);
  window.location.href="payment.html";
}

function toggleDark(){
  document.body.classList.toggle("dark");
}

function filterProducts(){
  let v=document.getElementById("search").value.toLowerCase();
  document.querySelectorAll(".card").forEach(c=>{
    c.style.display=c.innerText.toLowerCase().includes(v)?"block":"none";
  });
}
