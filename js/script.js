
//Navbar
fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
    });


// Fetch products from API
let Allproducts = [];
async function getAllProducts() {
    try {
        let response = await fetch("https://fakestoreapi.com/products");
        let products = await response.json();
        console.log(products);
        Allproducts = [...products];
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
                <button class="product-Cart">Cart</button>
            </div>
        </div>
        `
    })
}

///Filtering 
/////ALL
const allProductsFilter = document.getElementById("all-btn")
allProductsFilter.addEventListener("click", () => {
    displayProducts(Allproducts);
})

//MensProducts
const mensProductsFilter = document.getElementById("mens-btn")
mensProductsFilter.addEventListener("click", () => {
    const mensProducts=Allproducts.filter((product)=>{
        return product.category === "men's clothing";

    })

    displayProducts(mensProducts)
});

//WomensProduct
const womensProductFilter = document.getElementById("womens-btn")
womensProductFilter.addEventListener("click",()=>{
    const womensProducts = Allproducts.filter((product)=>{
        return product.category === "women's clothing";
    })
    displayProducts(womensProducts)
})

//Jewelry

const jewelryProductFilter = document.getElementById("jewelry-btn")
jewelryProductFilter.addEventListener("click",()=>{
    const jewelryProducts = Allproducts.filter((product)=>{
        return product.category === "jewelery"
    })
    displayProducts(jewelryProducts)
})

//Electronics
const electronicsProductFilter = document.getElementById("electronics-btn");
electronicsProductFilter.addEventListener("click",()=>{
    const electronicsProducts = Allproducts.filter((product)=>{
        return product.category === "electronics"
    })
    displayProducts(electronicsProducts)
})