/**
 *
 * Fibonnacci Series
 * 0, 1, 1, 2, 3, 5, 8, 13
 *
 * 4 = > 0 1 1 2
 */

const number = parseInt(prompt("Enter number for n"));
let n1 = 0,
  n2 = 1,
  nextNum;

console.log("Fibbonacci Series of", number);
for (let i = 1; i <= number; i++) {
  console.log(n1);
  nextNum = n1 + n2;
  n1 = n2;
  n2 = nextNum;
}
