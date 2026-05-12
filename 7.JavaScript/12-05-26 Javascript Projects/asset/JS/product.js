
let allProducts = [];
let currentpage = 1;
let itemperpage = 8;
let filteredProducts = [];


async function Productdata() {

    try {

        let res = await fetch("https://dummyjson.com/products")
        let data = await res.json();

        allProducts = data.products;

        Pagination(allProducts);

    } catch (err) {

        console.log(err);

    }

}

function Productall(product) {

    let products = product;

    const allproductsitem = document.getElementById("product-container");
    let noresult = document.getElementById("no-result");

    if (!allproductsitem) return;

    allproductsitem.innerHTML = "";

    if (products.length === 0) {

        allproductsitem.innerHTML = "";
        if (noresult) noresult.style.display = "block";
        return;
    }

    if (noresult) noresult.style.display = "none";

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

function filterProducts() {

    let query = (searchInput?.value || "").toLowerCase();
    let sort = sortSelect?.value || "default";

    let filtered = allProducts.filter(p => p.title.toLowerCase().includes(query) || p.category.toLowerCase().includes(query) || p.description.toLowerCase().includes(query));

    if (sort === "low") {
        filtered.sort((a, b) => a.price - b.price)
    }
    if (sort === "high") {
        filtered.sort((a, b) => b.price - a.price)
    }
    if (sort === "name") {
        filtered.sort((a, b) => a.title.localeCompare(b.title))
    }

    currentpage = 1;


    Pagination(filterProducts);

}


// add to cart Function 

function addcart(id) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let product = allProducts.find(p => p.id === id);

    if (!product) return;

    let existingproduct = cart.find(item => item.id === id);

    if (existingproduct) {

        existingproduct.qty = (existingproduct.qty || 1) + 1;
    } else {
        product.qty = 1;


        cart.push(product);
    }


    localStorage.setItem("cart", JSON.stringify(cart));

    alert("item Added to Cart...");

    console.log(product);


}


function Paginationitem(products) {

    let totalpage = Math.ceil(products.length / itemperpage);

    let page = document.getElementById("pagination");

    if (!page) return;

    page.innerHTML = "";

    for (let i = 1; i <= totalpage; i++) {

        page.innerHTML += `
        
        <button class="btn btn-primary" onclick="changePages(${i})">${i}</button>
        
        `
    }
}



function Pagination(products) {

    let start = (currentpage - 1) * itemperpage;

    let end = start + itemperpage;

    let Paginationitemss = products.slice(start, end);

    Productall(Paginationitemss);

    Paginationitem(products);

}

function changePages(page) {

    currentpage = page;

    const data =
        filteredProducts.length > 0 ? filteredProducts : allProducts;


   Pagination(data)

}

Productdata();

