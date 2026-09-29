//arrays - multiple datatypes can be there in one array
//they are resizeable 
//arrays copy operations create shallow copies means jo change karenge woh org me bhi change hoga - referencepoint same hai 

const myArr= [0,1,2,3,4,5]
const heroes = ["saniya","aman","pranav"]

//another way of assigning array 
const  myArr2 = new Array(9,6,3,2,1)
// console.log(myArr[1]);

//Array methods 

myArr.push(6)
myArr.push(7)
myArr.pop()


myArr.unshift(11)
// console.log(myArr);//koi aisa number jo start me daalna ho 
myArr.shift()//ye us first number ko jaake hata dega 
// console.log(myArr);
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(4))

const newArr = myArr.join()//adds all the element of any array into a string 
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice,splice
console.log("A ",myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3);
console.log("C ",myArr);//C  [ 0, 4, 5, 6 ] 
console.log(myn2);
//difference --  SLICE = take a piece, leave original untouched
// SPLICE = cut/change the original
