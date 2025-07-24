let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  updateCart();
  alert(product + " a été ajouté au panier !");
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.product} - ${item.price}€ 
      <button onclick="removeFromCart(${index})">X</button>`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total + "€";
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function toggleCart() {
  const cartBox = document.getElementById("cart");
  cartBox.style.display = cartBox.style.display === "none" || cartBox.style.display === "" ? "block" : "none";
}document.getElementById("order-date").value = new Date().toLocaleString();

