// dom Taget methods

// let dom = document.getElementById("container");

// console.log(dom);


// dom.textContent = "Welocme to the page!!!";

// dom.innerHTML = ` 
//     <h1> Hello, HI  </h1>
//     <p> Tushar Patel </p>
//     <h2>Hiii Mr. Welocme to the Page</h2>
// `

// dom.textContent=
// ` 
//     <h1> Hello, HI  </h1>
//     <p> Tushar Patel </p>
//     <h2>Hiii Mr. Welocme to the Page</h2>
// `


// let value = document.getElementsByClassName("heading");

// console.log(value);

// dom.style.backgroundColor = "red";
// dom.style.color = "white";
// dom.style.border= "2px solid black"
// dom.style.textAlign= "center";

for(let i=0; i < 2; i++){
    
    let dom = document.getElementsByClassName("heading")[i];

    console.log(dom);

    
    dom.style.backgroundColor = "red";
    dom.style.color = "white";
    dom.style.border= "2px solid black"
    dom.style.textAlign= "center";
        

}


let value  = document.getElementsByTagName("p")[0];

console.log(value);


value.style.backgroundColor = "blue";
value.style.color = "white";
value.style.padding = "10px";
value.style.border="4px solid red"


let dom1 = document.getElementsByName("firstname")[0];
let dom2 = document.getElementsByName("lastname");

console.log(dom1);
console.log(dom2);

dom1.value = "My name is tushar";   

//quary selcetor & quaryselctorall


function select(){

    const title= document.querySelector(".heading1");


    title.style.backgroundColor = "green";
    title.style.color = "white";
    title.style.padding="10px";

    
    

}