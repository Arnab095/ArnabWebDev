console.clear();

// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

// Solution:-
let arr = [2, 3, 4, -2, 6, 8, 9, 11];
function pairedIntegers(sum){
  let res = [];
  let n = arr.length;
  let low = 0, high = n-1;
  
  arr.sort(function(a, b){return a-b;});
  while(low < high){
    if(arr[low] + arr[high] == sum){
      // console.log(`The Pairs: ( ${arr[low]} , ${arr[high]} )`);
      // console.log(`( ${arr[low]} + ${arr[high]} ) = ${sum}`);
      res.push(`(${arr[low]}, ${arr[high]} )`);
    }
    if(arr[low] + arr[high] > sum){
      high--;
    }
    else{
      low++;
    }
  }
  return res;
}
let result1 = pairedIntegers(6);
console.log("Question 1 Output");
console.log("The pairs are:");
console.log("OUTPUT 2.1---->", result1);
console.log("Question 1 ------End------");
console.log("");
console.log("");

// Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

// Solution:-
let arr1 = [1,2,3,4,5];
function reverseInOrgArr(arr){
  let len = arr1.length;
  for(let  i = 0; i < Math.floor(len/2); i++){
    [arr1[i], arr1[len-1-i]] = [arr1[len-1-i], arr1[i]];
  }
}
reverseInOrgArr(arr1);
console.log("Question 2 Output");
console.log("OUTPUT 2.1---->", arr1);
console.log("Question 2 ------End------");
console.log("");
console.log("");

// Q3. Write a program to check if two strings are a rotation of each other?

// Solution:-
function TwoStringRotation(str1, str2){
  // str1 = str1.toLowerCase();
  // str2 = str2.toLowerCase();
  let concatenatedStr = str1 + str1;
  if((str1.length == str2.length) && (concatenatedStr.indexOf(str2) != -1)){
    return `${str1} and ${str2} are rotation of each other`;
  } else {
    return `${str1} and ${str2} are NOT rotation of each other`;
  }
}

console.log("Question 3 Output:-");
console.log("OUTPUT 3.1---->", TwoStringRotation("MONI", "NIMO"));
console.log("OUTPUT 3.2---->", TwoStringRotation("abcde", "deabc"));
console.log("OUTPUT 3.3---->", TwoStringRotation("ABCD", "ACBD"));
console.log("Question 3  ------End------");
console.log("");
console.log("");

// Q4. Write a program to print the first non-repeated character from a string?

// Solution:-
function firstNonRepeatChInStr(str){
  const obj = {};
  let str1 = str.toLowerCase();
  for(let elem of str1){
    (!obj[elem]) ? obj[elem] = 1 : obj[elem]++;
  }
  for(let elem in obj){
    if(obj[elem] === 1){
      return elem;
      break;
    }
  }
 return "No first Non-repeated character in given string";
}
console.log("Question 4 OutPut");
console.log("OUTPUT 4.1---->", firstNonRepeatChInStr("Barberraef"));
console.log("OUTPUT 4.2---->", firstNonRepeatChInStr("jjavasscrriipptt"));
console.log("OUTPUT 4.3---->", firstNonRepeatChInStr("javascript"));
console.log("Question 4  ------End------");
console.log("");
console.log("");

// Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.

// Solution:-
// Using Recursion & similar to Stack:-
function towerOfHanoi (n, fromRod, toRod, helpRod){
  if(n <= 0){return;}
  towerOfHanoi(n-1, fromRod, helpRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n-1, helpRod, toRod, fromRod);  
}
let N = 2;
// A, B and C are names of rods
console.log("Question 5 OutPut ");
towerOfHanoi(N, "A", "C", "B");
console.log("Question 5  ------End------");
console.log("");
console.log("");

// Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

// Solution:-
function postfixToprefix(value) {
  function isOperator(x) {
    switch (x) {
      case "+":
      case "-":
      case "*":
      case "/":
      case "^":
      case "%":
        return true;
    }
    return false;
  } 
  let stack = [];
  for (let i = 0; i < value.length; i++) {
    if (isOperator(value[i])) {
      let op1 = stack.pop();
      let op2 = stack.pop();
      let op3 = value[i];
      let temp = op3 + op2 + op1;
      stack.push(temp);
    } else {
      stack.push(value[i]);
    }
  }
  return stack[stack.length - 1];
}
let result6 = postfixToprefix("AB+CD-*");

console.log("Question 6 OutPut");
console.log("--->", result6);
console.log("Question 6 ------End------");
console.log("");
console.log("");

// Q7.Write a program to convert prefix expression to infix expression.

// Solution:- 
function prefixToInfix(value) {
  function isOperator(x) {
    switch (x) {
      case "+":
      case "-":
      case "*":
      case "/":
      case "^":
      case "%":
        return true;
    }
    return false;
  }

  let stack = [];

  for (let i = value.length - 1; i >= 0; i--) {
    if (isOperator(value[i])) {
      let op1 = stack.pop();
      let op2 = stack.pop();
      // let temp = "(" + op1 + value[i] + op2 + ")";
      let temp = `( ${op1} ${value[i]} ${op2} )`;

      stack.push(temp);
    } else {
      stack.push(value[i] + "");
    }
  }
  return stack[stack.length - 1];
}

let result7 = prefixToInfix("*-A/BC-/AKL");
console.log("Question 7 OutPut");
console.log("---->", result7);
console.log("Question 7 ------End------");
console.log("");
console.log("");

// Q8. Write a program to check if all the brackets are closed in a given code snippet.

// Solution:-
function CheckParenthese(value) {
  let stack = [];

  for (let i = 0; i < value.length; i++) {
    if (value[i] == "(" || value[i] == "[" || value[i] == "{") {
      stack.push(value[i]);
    } else if (
      (value[i] === ")" && stack[stack.length - 1] === "(") ||
      (value[i] == "}" && stack[stack.length - 1] == "{") ||
      (value[i] == "]" && stack[stack.length - 1] == "[")
    ) {
      stack.pop();
    }
  }
  if (stack.length == 0) {
    return "All Brackets are closed";
  } else {
    return "Brackets are not closed";
  }
}
let result8 = CheckParenthese("([{}])");
console.log("Question 8 OutPut");
console.log("---->", result8);
console.log("Question 8 ------End------");
console.log("");
console.log("");

// Q9. Write a program to reverse a stack.

// Solution:-
class StackReverse {
  constructor() {
    this.stack = [];
    this.reverse = [];
  }
  add(val) {
    this.stack.push(val);
  }
  revStack() {
    if (this.stack.length == 0) {
      return "Stack";
    } else {
      return this.reverse.push(this.stack.pop());
    }
  }
  print() {
    return this.stack.push();
  }
}

var stackList = new StackReverse();

stackList.add(1);
stackList.add(2);
stackList.add(3);
stackList.add(4);

console.log("Question 9 OutPut");
console.log("Original Stack");
console.log(stackList.stack);
stackList.revStack();
stackList.revStack();
stackList.revStack();
stackList.revStack();

console.log("Reversed Stack");
console.log(stackList.reverse);
console.log("Question 9 ------End------");
console.log("");
console.log("");

// Q10. Write a program to find the smallest number using a stack.

// Solution:-
function smallestNumber(stack) {
  let res = [];
  res.push(stack[0]);
  for (let i = 0; i < stack.length; i++) {
    if (res[res.length - 1] > stack[i]) {
      res.pop();
      res.push(stack[i]);
    }
  }
  return res[res.length - 1];
}

console.log("Question 10 OutPut");
console.log("Output 10.1 ---->", smallestNumber([10, 20, 1, 4]));
console.log("Question 10 ------End------");
console.log("");
console.log("");