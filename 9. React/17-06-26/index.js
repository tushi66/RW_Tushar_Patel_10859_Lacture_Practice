// Javascript Rest operator (...)

// Function Parameter


function sum(...num){
    return num.reduce( (total, number) => total + number, 0)
}

console.log('The sum is ' + sum(10, 20, 30, 40,50));


// first element and remaining elements

const[first, ...other] = [10, 20, 30, 40, 50]

console.log( 'The first element is '+first);
console.log('The others element is ' +other);


// Object Destructuring


const std = {
    name : "Tushar",
    age : 27,
    city: "Surat"
}

const {name, age, city } = std;

console.log( 'name is a ' + name);
console.log( 'the age is ' + age);
console.log( ' city name is ' + city);


console.log(std.name);

// copy array 

const arr = [1, 2, 3]
const arr2 = [...arr, 4, 5, 6]


console.log(arr);
console.log(arr2);

// Merge Array 

const frontend = ["Html" , "CSS", "Boostrap"]
const backend = ["Nodejs" , "express.js", "MongoDB"]

const Fullstack = [...frontend, ...backend];

console.log(Fullstack);


// ADD new Element

const nums = [10, 20, 30, 40]

const updt = [...nums, 50, 60 ,70]

console.log(updt);


// Copy Objects

const Stds = {

    name: "Tushar P",
    age : 27

}
const coppy = {...Stds}
console.log(coppy);

// Merge Objects

const Basic = {
    name:"Tuahsr",
    age: 27
} 

const info ={
    city:"surat"
}

const basicinfor ={
    ...Basic,
    ...info
}

console.log(basicinfor);


// count Occureences 

const fruits = ["apple", "Banana", "apple", "Banana", "apple", "apple", "Orange"]

const count= fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc
}, {})

console.log(count);


// counter exmaple

const grp1 = [
    { name:"Tushar",
        course: "Html"
    },  
    { name:"Jay",
        course: "CSS"
    },  
    { name:"patel",
        course: "Boostrap"
    },  
    { name:"abhay",
        course: "Html"
    },  
    { name:"manav",
        course: "Html"
    },  
    { name:"arav",
        course: "Boostarp"
    }  
 ]
 
 const course = grp1.reduce( (acc, cours) =>{
    if(cours.course === "Html"){
        acc.push(cours);
    }
    
        return acc;
 },[])

 console.log(course);
 
