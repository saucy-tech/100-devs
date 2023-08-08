// *Variables*
// Declare a variable, assign it a value, and alert the value
let game = "SOCOM";
alert(game);

// Create a variable, divide it by 10, and console log the value
let myNum = 3;
console.log(myNum / 10);

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplyThree(n0, n1, n2) {
  alert(n0 * n1 * n2);
}

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function addSubtract(n0, n1, n2, n3) {
  console.log(n0 + n1 - n2 - n3);
}

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function addSubtractDivide(n0, n1, n2) {
  let winna = (100 + n0 - n1) / n2;
  if (winna > 25) {
    console.log("WE HAVE A WINNA");
  }
}
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
