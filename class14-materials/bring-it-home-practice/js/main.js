// *Variables*
// Create a variable and console log the value
let firstName = "Brandon";
console.log(`${firstName}`);

// Create a variable, add 10 to it, and alert the value
let num = 5;
num += 10;
alert(num);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFourNumbersAlertDifference(n, n1, n2, n3, n4) {
  alert(n - (n1 + n2 + n3 + n4));
}

// Create a function that divides one number by another and returns the remainder
function divideReturnRemainder(n, n1) {
  return n % n1;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNumsAlertGreaterThanFifty(n, n1) {
  if (n + n1 > 50) {
    alert("Jumanji");
  } else {
    alert("NOPE");
  }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeNumsCheckDivisibleByThree(n, n1, n2) {
  if ((n * n1 * n2) % 3 == 0) {
    alert("ZEBRA");
  } else {
    alert("Nope");
  }
}
