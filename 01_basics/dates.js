//DATE
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,13)//months 0 se start hote hai in js 
// let myCreatedDate = new Date(2023,0,13,5,3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

//timestamps jab hum exact polls and quizes design karenge kisne fastest submit kiya ye sab 
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// 179065029972--milliseconds 
// 1673654400000-- isse hum compare kar paate hai who did first comparison millisecond me hi karna 
// console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


newDate.toLocaleString('default', {//internationalization - default 
    weekday: "Long",//monday format ko aur modification console.log(newDate);
})