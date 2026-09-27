let score = "hitesh"//true //undefined //0//"33abc"//"33"
//score =  33 if rehta toh hum  bolte its a number but " " isme likha isliye its a string 

// console.log(typeof score);
// console.log(typeof(score));//as a method 

// but operation numbers pe hi karna hai toh 
// new variable 
let valueInNumber = Number(score);
//score ye ab nummber me convert hogaya hai
// console.log(typeof valueInNumber);//abc hai still number diya toh ye nahi hona chahiye tha 
// console.log(valueInNumber);//NaN
//means java script me woh convert toh hojaaega but woh number NaN dikhaaega fir 
//" 33" => 33
// 0 daala toh 0 de diya 
// undefined pe nan aaya 
//true liya toh 1 aaya 
// koi string hai toh firse Nan me aayega because number nai hai woh 

let isLoggedIn = 1 
let booleanIsLoggedIn =  Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

//1=> true; 0=> false
//"" => false
//"hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

//dikhne me toh int hai par actually string hai 



