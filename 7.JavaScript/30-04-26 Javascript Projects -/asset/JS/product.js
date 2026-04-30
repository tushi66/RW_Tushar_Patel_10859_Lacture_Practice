
async function Productdata() {


    let res = await fetch("https://dummyjson.com/products")
    let data = await res.json();

    return data;

}   

async function ProductRender() {

    const productData = await Productdata();

    const cart = document.getElementById("product-container");

    cart.innerHTML = ""; 

    productData.products.forEach((item) => {
        

        let card = `
             <div class="col-md-4 col-lg-3 mb-4">
                <div class="card h-100 shadow">
                    <img src="${item.thumbnail}" class="card-img-top" style="height:200px; object-fit:cover;">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">₹${item.price}</p>
                        <button class="btn btn-primary w-100">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;

        cart.innerHTML += card;


    });




}

ProductRender()