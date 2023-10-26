// *Variables*
// Create a variable and console log the value
const myVar = 2;
console.log(myVar);

// Create a variable, add 10 to it, and alert the value
let leon = 1;
alert(leon + 10);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4(n0, n1, n2, n3) {
  alert(n0 - n1 - n2 - n3);
}
// Create a function that divides one number by another and returns the remainder
function divideAnother(n0, n1) {
  return n0 % n1;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumangiSum(n0, n1) {
  if (n0 + n1 > 50) {
    alert("Jumanji");
  } else alert("less than 50");
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multy3(n0, n1, n2) {
  const product = n0 * n1 * n2;
  if (product % 3 === 0) {
    alert("zebra");
  }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordRepeater(s0, n0) {
  for (let i = 1; i <= n0, i++; ) {
    console.log(s0);
  }
}
