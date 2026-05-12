
async function Productdata() {


    let res = await fetch("https://dummyjson.com/products")
    let data = await res.json();

    return data;

}

async function Productall(product) {

    let products = product;

    const productData = await Productdata();

    const allproductsitem = document.getElementById("product-container");
    let noresult = document.getElementById("no-result");

    if (!allproductsitem) return;

    allproductsitem.innerHTML = "";

    if (products.length === 0) {

        allproductsitem.innerHTML = "";
        if (noresult) noresult.style.display = "block";
        return;
    }

    products.forEach((item) => {

        let card = `
             <div class="col-md-4 col-lg-3 mb-4">
                <div class="card h-100 shadow">
                    <img src="${item.thumbnail}" class="card-img-top" style="height:200px; object-fit:cover;">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">₹${item.price}</p>
                        <button onclick="addcart(${item.id})" class="btn btn-primary w-100">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;

        allproductsitem.innerHTML += card;


    });

}


let searchInput = document.getElementById("search-input")
let sortSelect = document.getElementById("sort-select")

if (searchInput) {
    searchInput.addEventListener("input", filterProducts)
}

if (sortSelect) {

    sortSelect.addEventListener("change", filterProducts)
}

async function filterProducts() {

    let productData = await Productdata()

    let query = (searchInput?.value || "").toLowerCase();
    let sort = sortSelect?.value || "default";

    let filtered = productData.products.filter(p => p.title.toLowerCase().includes(query) || p.category.toLowerCase().includes(query) || p.description.toLowerCase().includes(query));

    if (sort === "low") {
        filtered.sort((a, b) => a.price - b.price)
    }
    if (sort === "high") {
        filtered.sort((a, b) => b.price - a.price)
    }
    if (sort === "name") {
        filtered.sort((a, b) => a.title.localeCompare(b.title))
    }

    Productall(filtered);
}

filterProducts()

// add to cart Function 

async function addcart(id) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let productData = await Productdata();

    let product = productData.products.find(p => p.id === id);

    if(!product) return;

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("item Added to Cart...");

    console.log(product);
    

}

