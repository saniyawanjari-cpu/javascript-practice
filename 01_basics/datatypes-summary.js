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
