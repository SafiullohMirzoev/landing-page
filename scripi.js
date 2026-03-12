let cart = [];

function addToCart(productName) { cart.push(productName); updateCart(); }

function updateCart() { const cartItems = document.getElementById("cart-items"); cartItems.innerHTML = ""; cart.forEach((item, index) => { const li = document.createElement("li"); li.textContent = item; const removeButton = document.createElement("button"); removeButton.textContent = "Удалить"; removeButton.onclick = () => removeFromCart(index); li.appendChild(removeButton); cartItems.appendChild(li); }); }

function removeFromCart(index) { cart.splice(index, 1); updateCart(); }

function checkout() { if (cart.length === 0) { alert("Ваша корзина пуста!"); return; } alert("Спасибо за покупку! Товары: " + cart.join(", ")); cart = []; updateCart(); }
