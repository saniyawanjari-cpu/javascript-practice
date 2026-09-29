const score = 400
// console.log(score);

const balance = new Number(100)


// console.log(balance);//defined in object 
// console.log(balance.toString().length);
// console.log(balance.toFixed(1));
// console.log(balance.toFixed(2));
const orNumber = 12.827273
const otherNumber = 123.827273
const otherNumber1 = 1123.827273
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber1.toPrecision(3));
// console.log(orNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString());//us waala 
// console.log(hundreds.toLocaleString('en-IN'));

//Maths//
console.log(Math);
//Object [Math] {} -- ye ek object hai jisme bohot saari properties hai 
console.log(Math.abs(-4));//-ve  to +ve karega +ve will be +ve 
console.log(Math.round(5.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.sqrt(49));
console.log(Math.min(3,4,5,1));
console.log(Math.max(34,41,52,12));
console.log(Math.random());//0 aur 1 ke bich me values deti hai 
console.log((Math.random()*10) + 1);//isse right shift  hojaaega but value can be  0.1 toh floor karnee pe it will be 0 
console.log(Math.floor(Math.random()*10) + 1);//ye ab values 1-9 ke bich me dega 
//but kabhi kabhi case aata hai ki in aur max ke bich me define karna ho 
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max- min+1))+ min);//(max- min+1) so that ye range me aajaye max min ke and +1 for zero case avoidance min kyuki min utti value ke andar chahiye 



