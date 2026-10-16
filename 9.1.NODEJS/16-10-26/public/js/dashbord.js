let employee = []
let books = []
let nextEmployeeId= 1;
let nextBookId = 1;

const $ = (id) =>  document.getElementById(id);


function escapeHTML(value){

    return string(value).replace(/[&<>"']/g, (char) => ({

        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
        })[char]);


    }

    
function renderEmployees(search = "") {
  const rows = employees.filter((e) =>
    `${e.name} ${e.email} ${e.city}`.toLowerCase().includes(search.toLowerCase())
  );
  $("employeeRows").innerHTML = rows.map((e) => `
    <tr class="border-b">
      <td class="p-3">${escapeHTML(e.name)}</td>
      <td class="p-3">${escapeHTML(e.email)}</td>
      <td class="p-3">${escapeHTML(e.city)}</td>
      <td class="p-3 whitespace-nowrap">
        <button onclick="editEmployee(${e.id})" class="text-blue-700 mr-3">Edit</button>
        <button onclick="deleteEmployee(${e.id})" class="text-red-600">Delete</button>
      </td>
    </tr>`).join("");
  $("employeeCount").textContent = employees.length;
}

$("employeeForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const id = Number($("employeeId").value);
  const item = {
    name: $("empName").value.trim(),
    email: $("empEmail").value.trim(),
    city: $("empCity").value.trim(),
    gender: $("empGender").value
  };
  if (id) employees = employees.map((e) => e.id === id ? { ...e, ...item } : e);
  else employees.push({ id: nextEmployeeId++, ...item });
  event.target.reset();
  $("employeeId").value = "";
  renderEmployees($("employeeSearch").value);
});

function editEmployee(id) {
  const e = employees.find((item) => item.id === id);
  if (!e) return;
  $("employeeId").value = e.id;
  $("empName").value = e.name;
  $("empEmail").value = e.email;
  $("empCity").value = e.city;
  $("empGender").value = e.gender;
  $("employeeForm").scrollIntoView({ behavior: "smooth", block: "center" });
}

function deleteEmployee(id) {
  if (!confirm("Delete this employee?")) return;
  employees = employees.filter((e) => e.id !== id);
  renderEmployees($("employeeSearch").value);
}

function renderBooks(search = "") {
  const rows = books.filter((b) =>
    `${b.title} ${b.author}`.toLowerCase().includes(search.toLowerCase())
  );
  $("bookRows").innerHTML = rows.map((b) => `
    <tr class="border-b">
      <td class="p-3">${escapeHTML(b.title)}</td>
      <td class="p-3">${escapeHTML(b.author)}</td>
      <td class="p-3">₹${b.price.toFixed(2)}</td>
      <td class="p-3">${b.quantity}</td>
      <td class="p-3 whitespace-nowrap">
        <button onclick="editBook(${b.id})" class="text-blue-700 mr-3">Edit</button>
        <button onclick="deleteBook(${b.id})" class="text-red-600">Delete</button>
      </td>
    </tr>`).join("");
  $("bookCount").textContent = books.length;
}

$("bookForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const id = Number($("bookId").value);
  const price = Number($("bookPrice").value);
  const quantity = Number($("bookQuantity").value);
  if (!Number.isFinite(price) || price < 0 || !Number.isInteger(quantity) || quantity < 0) {
    alert("Enter a valid price and a whole-number quantity.");
    return;
  }
  const item = {
    title: $("bookTitle").value.trim(),
    author: $("bookAuthor").value.trim(),
    price,
    quantity
  };
  if (id) books = books.map((b) => b.id === id ? { ...b, ...item } : b);
  else books.push({ id: nextBookId++, ...item });
  event.target.reset();
  $("bookId").value = "";
  renderBooks($("bookSearch").value);
});

function editBook(id) {
  const b = books.find((item) => item.id === id);
  if (!b) return;
  $("bookId").value = b.id;
  $("bookTitle").value = b.title;
  $("bookAuthor").value = b.author;
  $("bookPrice").value = b.price;
  $("bookQuantity").value = b.quantity;
  $("bookForm").scrollIntoView({ behavior: "smooth", block: "center" });
}

function deleteBook(id) {
  if (!confirm("Delete this book?")) return;
  books = books.filter((b) => b.id !== id);
  renderBooks($("bookSearch").value);
}

$("employeeSearch").addEventListener("input", (event) => renderEmployees(event.target.value));
$("bookSearch").addEventListener("input", (event) => renderBooks(event.target.value));

renderEmployees();
renderBooks()

