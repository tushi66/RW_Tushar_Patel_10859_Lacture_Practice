

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

