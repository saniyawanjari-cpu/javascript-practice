const name = "Saniya"
const repoCount = 100

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//`````` inko use kiya hai this is string interpolation

//object string ka 
const gameName = new String('saniyatechie-hc-sw')
console.log(gameName[0]);
console.log(gameName.__proto__);//{}-- object 
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('t'));
console.log(gameName.split('-'));



const newString = gameName.substring(0,5)//-ve value accept nahi karta 
console.log(newString);
const anotherString = gameName.slice(-8,4);//accepts -ve 
console.log(anotherString);

const newStr = "   saniya   "
console.log(newStr);
console.log(newStr.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('hitesh'));
