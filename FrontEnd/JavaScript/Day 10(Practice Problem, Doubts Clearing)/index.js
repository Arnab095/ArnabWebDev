/*
function demo() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);

  alert(a + b);
  console.log(a + b);
  let c = document.getElementById("sum");
  c.innerHTML = "sum of a and b is =>" + (a + b);
}

function demo1() {
  var a = 10;
  var b = 20;
  console.log(a + b);
  function demo2() {
    var c = 10;
    var d = 20;
    console.log("demo2()", c + d);
  }
//   console.log("Outside of demo2", c + d);
  demo2();
  return demo2;
}

// console.log(demo1);

var z = demo1();
console.log(z);
z();
*/






// var x=10;
// function demo(){
//     var a = 20;
//     console.log(a);
// }
// demo();








// Day 10(Practice Problem) //


// Synchronous and Asynchronous
/*
* Single Threaded and Multi Threaded
*
* JavaScript is a Synchronous single threaded langauge
*
*/

var n = 2
function square(num){
    var ans = num*num;
    return ans;
}
square(n);
square(4);


// Execution Context - 2 phases
// A) Creation - Memory Creation Phases
// B) Execution Phases

// C) Call Stack -
// 1) Program Stack
// 2) Control Stack
// 3) Run Time Stack
// 4) Execution Context Stack
// 5) Machine Stack

// function demo(){
//     console.log("Arnab Jana");
// }
// demo();

// getName();  // getName is not a function its a variable
var getName = () => {
    console.log("JS Function with Edyoda!!!");
}
console.log(getName);

/**note:write a shortest js program--- and it will be a empty javascript file */