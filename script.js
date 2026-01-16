let cart=[];
let total=0;

function hideLoader(){
  document.getElementById("loader").style.display="none";
}

function addToCart(btn){
  let c=btn.parentElement;
  cart.push({name:c.dataset.name,price:+c.dataset.price});
  total+=+c.dataset.price;
  renderCart();
  let t=document.getElementById("toast");
  t.style.display="block";
  setTimeout(()=>t.style.display="none",1000);
}

function renderCart(){
  let box=document.getElementById("cartItems");
  box.innerHTML="";
  cart.forEach(i=>box.innerHTML+=`<p>${i.name} - ₹${i.price}</p>`);
  document.getElementById("total").innerText=total;
}

function checkout(){
  if(cart.length===0){alert("Cart empty");return;}
  localStorage.setItem("amount",total);
  location.href="payment.html";
}

function toggleDark(){
  document.body.classList.toggle("dark");
}

function openModal(btn){
  let c=btn.parentElement;
  mTitle.innerText=c.dataset.name;
  mDesc.innerText=c.dataset.desc;
  mPrice.innerText=c.dataset.price;
  modal.style.display="block";
}
function closeModal(){ modal.style.display="none"; }

function scrollToProducts(){
  document.getElementById("products").scrollIntoView({behavior:"smooth"});
}
