let sliderIndex = 0;

const slides = document.querySelector(".slides");
const totalslides = document.querySelectorAll(".slide");
const dotcontainer = document.getElementById("dots");

// Create a dots

for(let i=0; i< totalslides.length; i++){

    const dot = document.createElement("span")
    dot.classList.add("dots")
    dot.onclick = () =>{ 
            sliderIndex = i;
            showSlide()
    }
    dotcontainer.appendChild(dot);
}   


const dots = document.querySelectorAll(".dots")
dots[0].classList.add("active");


function showSlide(){

    if(sliderIndex >= totalslides.length){
        sliderIndex=0;
    }
    if( sliderIndex < 0){
        sliderIndex = totalslides.length-1;
    }

    slides.style.transform = `translateX(-${sliderIndex * 100}%)`

    dots.forEach( dot => {
        dot.classList.remove("active");
        
    });
    dots[sliderIndex].classList.add("active");
}

function moveslide(n){
    sliderIndex += n;
    showSlide();
}

let autoslide = setInterval( () =>   {
moveslide(1);
}, 4000)


showSlide();
