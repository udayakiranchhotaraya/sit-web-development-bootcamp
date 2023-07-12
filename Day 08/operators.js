// Assignment
console.log("Assignment");
var numVar = 1;
let numLet;
numLet = 2;
numLet += 3; // num = num + 3;
const numConst = 3;

// Arithmetic
console.log("Arithemetic");
var a = 2;
var b = 3;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a**b);
console.log(a/b);
console.log(a%b);
console.log(a++);
console.log(++a);
console.log(++b);
console.log(b++);

var num1 = prompt("Enter the first number: ");
var num2 = prompt("Enter the second number: ");
const test = num1 + num2;
console.log(test);

var num1 = parseInt(prompt("Enter the first number: "));
var num2 = parseInt(prompt("Enter the second number: "));
// JS takes everything in string format. Hence conversion to required type is necessary.
const sum = num1 + num2;
console.log(sum);

// Relational or Comparison
console.log("Relational or Comparison");
var a = 10;
var b = 20;
console.log(a==b);
console.log(a!=b);
console.log(a>=b);
console.log(a>b);
console.log(a<=b);
console.log(a<b);
console.log(a===b);

// a==b --> compare the values
// a===b --> compare the values and the data-types

// Logical
// a && b --> a AND b
// a || b --> a OR b
// !a --> NOT a (or a COMPLEMENT)

// Ternary
// Syntax: (condition) ? statement(s)-if-true : statement(s)-if-false

// Nested Ternary
// Syntax: (condition) ? (condition ? if-true : if-false) : (condition ? if-true : if-false)