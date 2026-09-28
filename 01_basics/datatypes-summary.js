//primitive data types 
// String,number,null,undefined,symbol,Bigint
const score = 100
const scoreValue = 100.3// type of - number
const isLoggedIn = false //boolean to 
const outsideTemp = null//type of - object 
const ex = undefined//to - undefined 

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
// false
// Symbols are always unique when created separately.

const bigNumber = 261293783683817n// type of - undefined

//REFERENCE(NON PRIMITIVE)
//ARRAY,OBJECTS,FUNCTIONS
//array
const heros = ["shaktiman","PC","dad"]

//object- in curly braces - any data type can be stored 

let myObj = {
    name:"Saniya",
    age : 22
}

//function

const myFunction = function(){
    console.log("Hello World");   
}

console.log(typeof myFunction);


//// stack (primitive) and heap (non primitive)

let myYtName = "scaniadotcom"
let anothername = myYtName
// They now have the same value, but they're separate variables. anothername gets a COPY of what's inside myYtName.
anothername = "chai aur code "
// Forget the old value in anothername. Put this new value there You changed anothername, NOT myYtName.

console.log(myYtName);// scaniadotcom
console.log(anothername);//myYtName
//primitive datatype me copy milta hai original ki 

// let a = "hello";
// let b = a;

// b = "bye";

// console.log(a); // hello

//non premitive me copy nahi milti original ki sidha original value dete hai 

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "saniya@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// saniya@google.com
// saniya@google.com-- dono ke andar value change hojaaegi 
