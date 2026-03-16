// Typescript Objects

// Basic Object type

let student: {

    name: string;
    age:number;
    city: string;

}

student = {
    name: "Tushar",
    age: 27,
    city: "surat",

}

console.log(student);

// Using type alias

type User = {
    Firstname : string;
    Lastname: string;
    age : number;
    city: string;

}

const user:User = {
    Firstname : "Tushar",
    Lastname : "Patel",
    age:20,
    city: "surat",


}

console.log(user);


// Object With Methods 

type print = {

    name: string;
    greet():void;
}

const printf:print= {
    name: "Tushar",
    greet(){
        console.log("hello Tushar");
        
    }
}
console.log(printf);
console.log(printf.greet());




