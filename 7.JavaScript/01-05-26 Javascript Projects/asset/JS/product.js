let products = [];

async function Productdata() {


    let res = await fetch("https://dummyjson.com/products")
    let data = await res.json();

    return data;

}

async function Productall() {

    const productData = await Productdata();
    products = productData.products;

    const container = document.getElementById("product-container");


    container.innerHTML = "";

    productData.products.forEach((item) => {


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

        container.innerHTML += card;


    });
    DisplayCart();

}

// add to cart Function 

function addcart(id) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let product = products.find(p => p.id === id)

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart))

    alert("item Added to Cart...")

    DisplayCart();

}

function DisplayCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let container = document.getElementById("cart");
    let totalElement = document.getElementById("total");

    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = "<h3>Cart Is Empty</h3>";
        document.getElementById("total").innerText = ""
        return;
    }

    let table = `
        <table class="table table-bordered text-center align-middle">
            <thead class="table-dark">
                <tr>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
    `;

    let qty = item.qty || 1; 
    let itemTotal = item.price * qty;


    cart.forEach((item, index) => {

        total += itemTotal;

        table += `
            <tr>
                <td>
                    <img src="${item.thumbnail}" width="60" height="60" style="object-fit:cover;">
                </td>
                <td>${item.title}</td>
                <td>₹${item.price}</td>
                <td>${qty}</td>
                <td>₹${itemTotal}</td>
                <td>
                    <button onclick="removeItem(${index})" class="btn btn-danger btn-sm">
                        Remove
                    </button>
                </td>
            </tr>
        `;

    });

    table += `</tbody></table>`;

    container.innerHTML = table;

    totalElement.innerText = "Total: ₹" + total;



}

if (document.getElementById("product-container")) {
    Productall();
}

if (document.getElementById("cart")) {
    DisplayCart();
}