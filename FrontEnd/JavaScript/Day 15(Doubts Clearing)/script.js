/*
// 1. forEach loop
const numbers = [45,4,9,16,25]; // Array
let text = ""; // Variable
// for iterate
numbers.forEach(myFunction); // "myFunction" is callback function

// Callback function
function myFunction(value){
    text += " "+ value;
}
console.log(text);
*/

/*
// 2. for of loop
const team = ["IND", "AUS", "PAK", "SI"];
let text = "";
// for of loop
for (let x of team) {
  text += " " + x;
}
console.log(text);
*/

// Q.find the error
// var emp = {
//   name: "Arnab",
//   roll_no: 19,
//   gender: "M",
// };
// let sol = "";
// for (let x of emp) {
//   sol += " " + x;
// }
// console.log(sol);
/* Ans.
var emp = {
  name: "Arnab",
  roll_no: 19,
  gender: "M",
};
let sol = "";
for (let x in emp) {
  sol += " " + emp[x];
}
console.log(sol);
*/

/*
// 2. for in loop
const team = ["IND", "AUS", "PAK", "SI"];
let text = "";
// for in loop
for (let x in team) {
  text += " " + x;
}
console.log(text);
*/



/*
var emp = {
  name: "Arnab",
  roll_no: 19,
  gender: "M",
};

// note: for iteration of an object
console.log(Object.keys(emp));
console.log(Object.values(emp));
*/