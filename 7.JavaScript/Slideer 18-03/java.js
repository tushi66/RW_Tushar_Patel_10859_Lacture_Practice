let slide = ["⋆.˚🦋༘⋆", "˚⊱🪷⊰˚", "💲", "♻️", "☣", "☢" , "🕉"];

let color = ["#f597a7","#a1f8d4","#ee95fa","#b097f5","#f5f397","#7ad4e6","#f5c397"];    

let current = 0;

let box= document.getElementById("slide");   

let conter= document.getElementById("counter");


const btncolor = () => {
    for(let i=0; i<2; i++){
        let btn = document.getElementsByClassName("btn")[i]
        btn.style.backgroundColor = color[current]
    }
} 


const slideshow = () => {

    box.textContent = slide[current];
    box.style.backgroundColor = color[current];
    conter.textContent = (current + 1) + "/" + slide.length;

}

document.getElementById("next").addEventListener("click", () => {
    current = current+ 1 ;
    if(current>= slide.length){
        current = 0;
    }
    slideshow();
    btncolor()

} )

document.getElementById("prev").addEventListener("click", () => {

    current = current - 1;
    if(current<0){
        current = slide.length - 1;

    }
    slideshow();
    btncolor();
})


setInterval(() => {
    current= current +1;
    if(current >= slide.length){
        current = 0;
    }
    
slideshow();
btncolor();

}, 2000)


slideshow();
btncolor();