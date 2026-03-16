

// TNRN  wihtout parameters/argument and without Return
// TNRS  wihtout parameters/argument and with Return
// TSRN  wiht parameters/argument and without Return
// TSRS  wiht parameters/argument and with Return


// TNRN

function hello(){

    document.getElementById("s1").innerHTML = "Hello, Good Morning "
}

hello();

// TNRS 
 

function sr(name){

    return "Hello " + name + " ! welcome !" ;


}

var a = sr("Tushar");
document.getElementById("s2").innerHTML = a;

// TSRN

function sum(a,b){

    return a+b;

}


var c=sum(5,6);
document.getElementById("s3").innerHTML =  "the sum is :- " + c;

// TSRS

function iseven(num){

    if(num % 2 == 0){

        console.log("This number is Even");
    return true;

    }else{
        console.log("This number is not Even");
    return false;
    }

}

var even = iseven(56);
document.getElementById("s4").innerHTML = "This is num :- " + even;


// hoisted or function declaration

name(Tushar);
console.log(name);


function name(nam){

    return nam;

    

}






