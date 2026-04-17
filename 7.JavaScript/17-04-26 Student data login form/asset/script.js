const API = "http://localhost:3000/student"

let studentData = [];
let currentPage = 1;
let rowsPerPage = 5;
let editId = null;
let sortType = "";

console.log(studentData);

const getStudent = async () => {
    try {
        let res = await fetch(API);
        studentData = await res.json();
        applyAll();
    } catch (err) {
        console.error("Error:", err);
    }   

    console.log(studentData);
}

getStudent();


const applyAll = () => {
  
    let search = (document.getElementById("search").value || "").toLowerCase();

    let courseFilter = document.getElementById("filterCourse")?.value || "";

    let filtered = studentData.filter((c) => {
        let matchSearch = c.name.toLowerCase().includes(search) || c.email.toLowerCase().includes(search)


        let matchCourse = courseFilter === "" || c.course === courseFilter

        return matchCourse && matchSearch;
    })

    paginate(filtered);
    renderPagination(filtered.length);
}

const paginate = (data) => {
    let start = (currentPage - 1) * rowsPerPage;
    let paginated = data.slice(start , start + rowsPerPage)

    displaystudent(paginated);
    
}




const changePage = (page) => {
    currentPage = page;
    
    applyAll();
}


const renderPagination = (dataLength) => {
    let totalPages = Math.ceil(dataLength / rowsPerPage);
    let html = "";

    for (let i = 1; i <= totalPages; i++) {
        html += `
        <button onclick="changePage(${i})"
        class="px-3 py-1 border rounded ${i === currentPage ? 'bg-blue-500 text-white' : ''}">
            ${i}
        </button>`;
    }

    document.getElementById("pagination").innerHTML = html;
}


const displaystudent = (data) => {

    let html = "";


    data.forEach((s) => {

        html +=

            `
        
                   <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                                    <td class="w-4 p-4">
                                        <div class="flex items-center">
                                            <input id="table-checkbox-${s.id}" type="checkbox" value=""
                                                class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                                            <label for="table-checkbox-${s.id}" class="sr-only">Table checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                        ${s.name}
                                    </th>
                                    <td class="px-6 py-4">
                                         ${s.grid}
                                    </td>
                                    <td class="px-6 py-4">
                                         ${s.course}
                                    </td>
                                    <td class="px-6 py-4">
                                         ${s.fees}
                                    </td>
                                    <td class="px-6 py-4">
                                         ${s.age}
                                    </td>
                                    <td class="px-6 py-4">
                                         ${s.email}
                                    </td>
        
                                    <td class="px-6 py-4">
                                        <button onclick="editStudent('${s.id}')"
                                            data-modal-target="crud-modal1"
                                            data-modal-toggle="crud-modal1"
                                            class="bg-brand px-3 py-1 cursor-pointer">
                                            Edit
                                            </button>
        
                                        <button onclick="deleteStudent('${s.id}')"
                                        class="ms-3 text-red-600 cursor-pointer">
                                        Delete
                                        </button>
                                        </td>
                                </tr>
                      
             
             `;
    });

    document.getElementById("student_data").innerHTML = html;

}

document.getElementById("addForm").addEventListener("submit", async (e) => {
    e.preventDefault();


    let name = document.getElementById("name")
    let grid = document.getElementById("grid")
    let course = document.getElementById("course")
    let fees = document.getElementById("fees")
    let age = document.getElementById("age")
    let email = document.getElementById("email")


    let student = {
        name: name.value,
        grid: grid.value,
        course: course.value,
        fees: fees.value,
        age: age.value,
        email: email.value
    }

    await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student)
    })


    currentPage = 1;
    getStudent()

    e.target.reset()


})

//  Delete Data

const deleteStudent = async (id) => {
    await fetch(`${API}/${id}`, {
        method:"DELETE"
    });

    console.log("Deleting:", id);
    
    currentPage = 1;
    getStudent();


}

//  Edit Student data


const editStudent =async (id) => {
    editId = id;

    let res= await fetch(`${API}/${id}`);
    let data = await res.json();

    
    document.querySelector("#crud-modal1 #edit_name").value = data.name
    document.querySelector("#crud-modal1 #edit_grid").value = data.grid
    document.querySelector("#crud-modal1 #edit_course").value = data.course
    document.querySelector("#crud-modal1 #edit_fees").value = data.fees
    document.querySelector("#crud-modal1 #edit_age").value = data.age
    document.querySelector("#crud-modal1 #edit_email").value = data.email


    document.getElementById("crud-modal1").classList.remove("hidden");
    document.getElementById("crud-modal1").classList.add("flex");
};

let editForm = document.getElementById("editForm");

editForm.addEventListener("submit", async(e) => {
    e.preventDefault();

     let updated = {
        name: document.querySelector("#crud-modal1 #edit_name").value,
        grid: document.querySelector("#crud-modal1 #edit_grid").value,
        course: document.querySelector("#crud-modal1 #edit_course").value,
        fees: document.querySelector("#crud-modal1 #edit_fees").value,
        age: document.querySelector("#crud-modal1 #edit_age").value,
        email: document.querySelector("#crud-modal1 #edit_email").value
    }

    console.log("Updated", updated);
    
    await fetch(`${API}/${editId}`, {
        method:"PUT",
        headers:{"Content-Type" : "application/json"},
        body:JSON.stringify(updated)


    })

    let modal = document.getElementById("crud-modal1");
    modal.classList.add("hidden");
    modal.classList.remove("flex"); 

    currentPage = 1;
    getStudent();


})


document.getElementById('search').addEventListener("input" , () => {
    currentPage = 1;
    applyAll();
})

document.getElementById("filterCourse").addEventListener("change" , () => {
    currentPage = 1
    applyAll();
})
