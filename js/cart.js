
let cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart);

const cartBody = document.querySelector("#cart-body");

function displayCart() {

    const cartBody = document.querySelector("#cart-body");

    cartBody.innerHTML = "";

    const orderSummary = document.querySelector(".order-summary");
    if (cart.length === 0) {

        cartBody.innerHTML = `

            <div>
                <h2 class="text-center">Your Cart Is Empty</h2>

                <div class="text-center m-4">
                <a class="cart-shopping" href="products.html">
                    <i class="fa-solid fa-arrow-left"></i>
                    Continue Shopping
                </a>
                </div>

            </div>
    `;
      orderSummary.style.display = "none";
    }
    
    let totalProducts = 0;
    cart.forEach((item) => {
        totalProducts += item.quantity;
    });
    document.querySelector("#total-products").textContent = totalProducts;

    let subtotal = 0;
    cart.forEach((item) => {
        subtotal += item.price * item.quantity;
    });
    document.querySelector("#subtotal").textContent =
        `$${subtotal.toFixed(2)}`;

    const shipping = 30;
    document.querySelector("#shipping").textContent =
        `$${shipping.toFixed(2)}`;


    const totalAmount = subtotal + shipping;
    document.querySelector("#total-amount").textContent =
        `$${totalAmount.toFixed(2)}`;



    cart.forEach((item) => {

        cartBody.innerHTML += `
            <div class = "cart-items">
                <img src="${item.image}">

                <h3>${item.title}</h3>


                <p>
                    <button class="decrease-btn" data-id="${item.id}">-</button>

                    Quantity: ${item.quantity}

                    <button class="increase-btn" data-id="${item.id}">+</button>
                </p>
                    
                <p>${item.quantity} x $${item.price}</p>
            </div>
        `;

    });

}
displayCart();

cartBody.addEventListener("click", (event) => {
    if (event.target.classList.contains("increase-btn")) {
        const id = Number(event.target.dataset.id);
        const product = cart.find((item) => {
            return item.id === id;
        })
        product.quantity++;
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();

    } else if (event.target.classList.contains("decrease-btn")) {
        const id = Number(event.target.dataset.id);
        const product = cart.find((item) => {
            return item.id === id;
        });
        if (product.quantity > 1) {
            product.quantity--;
        } else {
            cart = cart.filter((item) => {
                return item.id !== id;
            });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
    }
});


const checkOut = document.querySelector("#checkout-btn");
checkOut.addEventListener("click", () => {
    alert("Checkout successful")
})