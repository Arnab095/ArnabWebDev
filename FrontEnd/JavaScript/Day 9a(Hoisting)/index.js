/* Hoisting in JS
 * it is a default behavior of the JS
 * need to declaration to the top
 */
demo();

function demo() {
  console.log("I am in Function Demo()");
}

var x = 10;
console.log("value of x", x);

console.log(z);
z = 10;
var z;

y = 20;
console.log(y * y);
var y;

/*
c = "nano";
console.log(c); // result=>error (Uncaught ReferenceError: Cannot access 'c' before initialization)
let c; // it means "let" some different behavior than "var"
*/


const b = 10;
// b="Arnab Jana"
console.log(b);


const abc = 50;
console.log(abc);
