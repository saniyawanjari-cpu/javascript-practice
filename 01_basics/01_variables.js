const accountId = 123421
let accountEmail = "saniyawanjari@gmail.com"
var password = "Scania@1278"
accountcity = "nagpur"
let accountState; //undefined  
// prefer not to use war because of issue in scope
// accountId = 34// not allowed -TypeError: Assignment to constant variable

accountEmail = "ari@gmail.com"
password = "278"
accountcity="delhi"
// console.log(accountId);
// console.log(accountEmail);
// console.log(password);
console.table([accountEmail,accountId,password,accountcity,accountState]);
