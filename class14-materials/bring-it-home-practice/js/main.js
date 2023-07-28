// *Variables*
// Create a variable and console log the value
const gisProgram = "test";
console.log(gisProgram);

// Create a variable, add 10 to it, and alert the value
let myNum = 10;
alert(num + 10);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractNumbers(n0, n1, n2, n3, n4) {
  alert(n0 - (n1 + n2 + n3 + n4));
}

// Create a function that divides one number by another and returns the remainder
function findRemainder(n0, n1) {
  return n0 % n1;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function checkSum(n0, n1) {
  if (n0 + n1 > 50) {
    alert("Jumanji");
  } else {
    alert("less than 50");
  }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function checkProduct(n0, n1, n2) {
  if ((n0 * n1 * n2) % 3 == 0) {
    alert("ZEBRA");
  } else {
    alert("not divisiable by 3");
  }
}
