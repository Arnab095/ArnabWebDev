/*
let nameObject = {
  name: "Jayesh Vyas",
};

let nameObject2 = {
  name: "Sumanth",
  sayHello: function () {
    console.log(this.name);
  },
};
// Object.prototype ->R&D
let callFunc = nameObject2.sayHello.bind(nameObject);
callFunc();
*/

/*
// prototype chain
const obj = {
  firstName: "Jayesh",
  show() {
    console.log(this.firstName);
  },
};
obj.show();
*/

/*
// Call method in JS
let obj1 = {
  name: "Jayesh Vyas",
};
let obj2 = {
  name: "Sumanth",
  sayHello: function (age) {
    console.log(this.name + "===" + age);
  },
};
obj2.sayHello.call(obj1, 29);
*/

// Apply Method
let obj1 = {
  name: "Jayesh",
};
let obj2 = {
  name: "Sumanth",
  sayHello: function (...age) {
    console.log(this.name + "===" + age);
  },
};
obj2.sayHello.apply(obj1, [23, 50, 48, 33]);
