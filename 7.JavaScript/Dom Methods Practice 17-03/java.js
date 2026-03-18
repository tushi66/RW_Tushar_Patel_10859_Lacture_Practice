function selectallitem(){

    const allitem =document.querySelectorAll(".item")

    allitem.forEach((item, index) => {
        item.classList.add("selected");

        item.textContent = `Item ${index + 1}`;

    })

}

function resetallitem(){

    const allitem = document.querySelectorAll(".item");
    allitem.forEach( item => {
        
        item.classList.remove("selected");

    })
}

let count = 0;

const counterdisplay = document.querySelector("#counter");

const incbtn = document.querySelector("#incrementbtn");

const resetbtn = document.querySelector("#resetbtn");

incbtn.addEventListener("click", ()=> {
    count++;
    counterdisplay.textContent = count;
    incbtn.style.backgroundColor= "red";
})

resetbtn.addEventListener("click",() => {

    count = 0;
    counterdisplay.textContent = count;
    resetbtn.style.backgroundColor = "green"
    
} )


// Another example 

const text = document.querySelector("#text");

const btns = document.querySelectorAll(".btncolor")

btns.forEach((btn)=> {
    btn.addEventListener("click", () => {

        const color = btn.textContent.toLowerCase();
        text.style.backgroundColor = color;
        btn.style.backgroundColor = color;
    })
})


// another exapm
