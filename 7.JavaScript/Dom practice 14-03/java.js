// dom Taget methods

let dom = document.getElementById("container");

console.log(dom);


dom.textContent = "Welocme to the page!!!";

dom.innerHTML = ` 
    <h1> Hello, HI  </h1>
    <p> Tushar Patel </p>
    <h2>Hiii Mr. Welocme to the Page</h2>
`

// dom.textContent=
// ` 
//     <h1> Hello, HI  </h1>
//     <p> Tushar Patel </p>
//     <h2>Hiii Mr. Welocme to the Page</h2>
// `


let value = document.getElementsByClassName("heading");

console.log(value);

dom.style.backgroundColor = "red";
dom.style.color = "white";
dom.style.border= "1px solid black"



