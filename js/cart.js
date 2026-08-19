
let cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart);

const cartBody = document.querySelector("#cart-body");

cart.forEach((item) => {

    cartBody.innerHTML += `
    
        <div>
            <img src="${item.image}" width="100">
            <h3>${item.title}</h3>
            <p>Price: $${item.price}</p>
            <p>Quantity: ${item.quantity}
            <button class="increase-btn" data-id="${item.id}">+</button></p>
        </div>

    `;

});

cartBody.addEventListener("click", (event) => {
    if (event.target.classList.contains("increase-btn")) {
        const id = Number(event.target.dataset.id);
        const product = cart.find((item) => {
            return item.id === id;
        });
        product.quantity++;
        localStorage.setItem("cart", JSON.stringify(cart));

    }

});