
const numb=[23, 32, 35, 98, 76, 78];

numb.forEach(function(numb)
{
    console.log(numb);
    
})

let p1 = document.getElementById("p1");

p1.innerHTML = "The loop is : == " + numb;

let mult =  numb.map(function(numb){
  
    return numb*2;
})


let p2 = document.getElementById("p2");

p2.innerHTML = " The Multiply by 2 number is :== "+ mult;


let x =  numb.filter(function(numb){

    return numb < 50;
})

let p3 = document.getElementById("p3");

p3.innerHTML = "The filter number is less than 50 is :=  "  + x;



let y = numb.find(function(numb){

    return numb > 50;
})

let p4 = document.getElementById("p4");

p4.innerHTML= " The find element is mor than 50 is a :==   " + y;




let z= numb.includes(32);

let p5 = document.getElementById("p5");

p5.innerHTML = "The value is give in this array is == " + z;


let a= numb.push(100);

let p6 = document.getElementById("p6");

p6.innerHTML = "The new element of length is == " + a + "<br> The new element of array is == "+ numb ;


let sum = 0;
let tot = numb.reduce(function(sum, num){
    return sum+num;
})

let p7 = document.getElementById("p7");

p7.innerHTML = "The Total nyumber of sum is == "+tot;

