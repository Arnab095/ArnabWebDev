/*
// reduce array method- it will substract from left to right
const numbers = [200, 75, 50];
document.getElementById("para").innerHTML = numbers.reduce(demo);

function demo(total, num) {
  return total - num;
}
*/

/*
// Map method
const num = [100, 50, 25, 10];
const newNum = num.map(demoNew);

document.getElementById("para").innerHTML = newNum;

function demoNew(num) {
  return num * 2;
}
*/

/*
//arr1 = [3,2,1,4,5,8,7,6,5];//9
//arr2 = [5,4,6,7,3,2,1,8,9,1];//10

//merge this array, we can't create any new array for the merging
//remove the duplicate, we can't use any new variable
//sort the array but without using any inbuild function-when we are sorting the array we can't use the sort function we have to use without any inbuild function
*/

/*
// API
function demo() {
  const obj = new XMLHttpRequest();
  obj.open("GET", "https://jsonplaceholder.typicode.com/users");

  obj.onload = function () {
    if (obj.status === 200) {
      const data = JSON.parse(obj.responseText);

      console.log(data);
      document.getElementById("para1").innerHTML = data[0].email;
    } else {
      console.error(`Error: ${obj.status}`);
    }
  };

  obj.onerror = function () {
    console.error("Errors");
  };
  obj.send();
}
*/