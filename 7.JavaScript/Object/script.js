// Javascript Object

// syntax

const Office = {

    HR : "Tushar",
    Senior : "Ram",
    Junior : "Jay",


}

console.log(Office);


// Dot Notation

console.log(Office.HR);
console.log(Office.Senior);
console.log(Office.Junior);

// Bracket Notation



console.log(Office["HR"]);
console.log(Office["Senior"]);
console.log(Office["Junior"]);


// Adding and Update Objects

console.log(Office);

Office.newHR = "Manav";

console.log(Office);


Office.Junior = "Yash";

console.log(Office);


// Delete Properties

delete Office.newHR;

console.log(Office);



// object also Store In Function 

const student = {

    name :"Aarush",
    age : 25,
    greet:function(){
        console.log(`Aarush age is ${this.age} years old.`);
        
    }

}

student.greet();

// Lopping throght Object 

// using for in loop



for(let i in Office){
    console.log(i, Office[i]);
}



// Object.key()

console.log(Object.keys(Office));

Object.keys(Office).forEach((key) => {
    console.log(key, Office[key]);
    
} )


// Object Value 

Object.values(Office).forEach((value) => {
    console.log(value);
    
    
});



// Object Enteries

console.log(Object.entries(Office));


for(let [key, value ] of Object.entries(Office) ){
    console.log(key, value);
    
}


// Nested Object

const input = {

    name: "Palak",
    address:{
        city: "Surat",
        pincode : 395002,
    }

}

console.log(input.address.city);
console.log(input.address.pincode);

// Array of objects

const user = [
    { name :"admin", work : "CE"},
    { name :"Tej", work : "WD"},
    { name :"veer", work : "IOS"},
    { name :"Rome", work : "FD"}
];

user.forEach( u => {
    console.log("Name is " +u.name + " Working as a " + u.work);
    
})




