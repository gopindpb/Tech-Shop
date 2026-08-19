// Fetch products from API
let allproducts = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
async function getAllProducts() {
    try {
        let response = await fetch("https://fakestoreapi.com/products");
        let products = await response.json();
        console.log(products);
        allproducts = [...products];
        displayProducts(products)
    }
    catch (error) {
        console.log(error);

    }
}


getAllProducts();
// Products 

function displayProducts(products) {

    const ProductsContainer = document.querySelector("#products");

    ProductsContainer.innerHTML = "";


    products.forEach((product) => {

        ProductsContainer.innerHTML += `

        <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.title}">
            <div class="card-body">
                <h5 class="product-title">${product.title}</h5>
                <p class="product-text">${product.description}</p>
            </div>
            <ul class=" price list-group list-group-flush">
                <li class="list-group-item">$ ${product.price}</li>
            </ul>
            <div class="product-card-body">
                <button class="product-details">Details</button>
                <button class="product-Cart" data-id="${product.id}">Cart</button>
            </div>
        </div>
        `
    })

}

///Filtering 
/////ALL
const allProductsFilter = document.getElementById("all-btn")
allProductsFilter.addEventListener("click", () => {
    displayProducts(allproducts);
})

//MensProducts
const mensProductsFilter = document.getElementById("mens-btn")
mensProductsFilter.addEventListener("click", () => {
    const mensProducts = allproducts.filter((product) => {
        return product.category === "men's clothing";

    })

    displayProducts(mensProducts)
});

//WomensProduct
const womensProductFilter = document.getElementById("womens-btn")
womensProductFilter.addEventListener("click", () => {
    const womensProducts = allproducts.filter((product) => {
        return product.category === "women's clothing";
    })
    displayProducts(womensProducts)
})

//Jewelry

const jewelryProductFilter = document.getElementById("jewelry-btn")
jewelryProductFilter.addEventListener("click", () => {
    const jewelryProducts = allproducts.filter((product) => {
        return product.category === "jewelery"
    })
    displayProducts(jewelryProducts)
})

//Electronics
const electronicsProductFilter = document.getElementById("electronics-btn");
electronicsProductFilter.addEventListener("click", () => {
    const electronicsProducts = allproducts.filter((product) => {
        return product.category === "electronics"
    })
    displayProducts(electronicsProducts)
})


///cart

const ProductsContainer = document.querySelector("#products");
ProductsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("product-Cart")) {
        const productId = Number(e.target.dataset.id);
        const product = allproducts.find((item) => {
            return item.id === productId
        })

        const existingProduct = cart.find((item) => {
            return item.id === productId;
        });

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
    }

});