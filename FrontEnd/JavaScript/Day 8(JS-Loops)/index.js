//loops in JavaScript
// 4 Types of loops in JS

// 1."for" loop in JS
/*
 *for(intialization;condition;increment/decrement)
*/
function demo() {
  let p = document.getElementById("para");
  for (let i = 0; i < 5; i++) {
    p.innerHTML += i;
  }
}

// 2."while" Loop in JS
/*
 * while(condition){
 *     code for execution
 * }
 *
*/
var a = 1;
while (a <= 5) {
  console.log("Value of a ==> ", a);
  a++;
}

// 3."do while" Loop in JS
/*
 * Do While Loop
 * do{
 *     code for execution
 *
 * } while(condition)
*/
var b = 1;
do {
  console.log("Value of b==> ", b);
  b++;
} while (b <= 5);

// "for in" loop in JS
/*
 * this is use for the property we can't use for the iteration of the value
*/
const obj = { firstName: "Jayesh", lastName: "Vyas", Age: 30 };
for (let prop in obj) {
  console.log(prop + ":" + obj[prop]);
}

// "for of" loop in JS
/*
 * "for of" loop is nothing it is just like it will take the value of the object, with the iteration it'll take the value of the object thats it.
 * this is same as "for" loop but the advantage here is
 * we don't need to initialize any thing here like "i=0", we don't need to any condition here like "i<names.length", we don't need to write any increment/decrement like "i++"
*/
// for "for of" loop
const names = ["Jayesh", "Sanjay", "Vijay"];
for (let v of names) {
  console.log("Values in names", v);
}
// for "for" loop
for (let i = 0; i < names.length; i++) {
  console.log("Values in names", names[i]);
}

// "for each" loop in JS
/*
 * for each loop in JS
*/
const arr = [100, 200, 300, 400];
arr.forEach((val) => console.log(val));

function foreachloop() {
  const demo = [100, 300, 500];
  const tempArr = []; //10000,
  demo.forEach(function (demo) {
    tempArr.push(demo * demo);
  }); //iteration 1 = 100*100
  console.log("demo", demo);
  console.log("tempArr", tempArr);
}
foreachloop();
//array.forEach(callback(element, index, arr), thisValue)

/*
 * Map Loop in JS
*/
const arr1 = [2, 4, 6];
const temparr = arr1.map((v) => v * 2);
console.log("temparr", temparr);
