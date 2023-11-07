// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let biggie = true;
alert(biggie);

// Declare a variable, reassign it to your favorite color, and console log the value
let favColor = "purple";
favColor = "light purple";
console.log(favColor);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function numSumner(n0, n1, n2, n3) {
  return (n0 + n1 + n2) / n3;
}
numSumner(1, 2, 3, 4);

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function numPower(n0, n1) {
  console.log(Math.pow(n0, n1));
}
numPower(2, 2);

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function alertBoo(biggie, favColor) {
  if (biggie) {
    alert(favColor);
  } else {
    console.log(biggie);
  }
}

//ternary
b ? alert(favColor) : console.log(biggie);

// functional expression
const alertOrLog = (biggie, favColor) =>
  b ? alert(biggie) : console.log(biggie);

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function logNum(n0) {
  for (let num = 1; num <= n0; num++) {
    return num;
  }
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("fizzbuzz");
  } else if (num % 3 === 0) {
    console.log("fizz");
  } else if (num % 5 === 0) {
    console.log("buzz");
  } else console.log(num);
}
