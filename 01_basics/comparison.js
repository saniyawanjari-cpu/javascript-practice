console.log(2 > 1)
console.log(2 >+ 1)
console.log(2 < 1)
console.log(2 == 1)
console.log(2 != 1)
// we know there answers will t/f
// comparison ke time data type shld be same 
console.log(null >= 0);//iska ans true isliye datatype same nai hua toh predictable ans nahi  aata datatype convert kar diya to  0
console.log(null==0);
console.log(null >0);

console.log(undefined ==0);
console.log(undefined >0);
console.log(undefined <0);
//avoid these kind of operations 

// === sirf value nahi data type ko bhi check karta hai 
console.log("2" === 2);

 
