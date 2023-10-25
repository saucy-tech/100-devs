//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwo(num0, num1) {
  alert(n0 - n1);
}
//create a function that divides three numbers and console logs the quotient
function divThree(num0, num1, num2) {
  console.log(num0 / num1 / num2);
}
//create a function that multiplys three numbers and returns the product
function multThree(num0, num1, num2) {
  return num0 * num1 * num2;
}
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function med(num0, num1, num2) {
  return (num0 + num1) / num2;
}
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function hard(num0, num1, num2, num3) {
  if (num0 * num1 > 100) {
    console.log(num2 + num3);
  } else if (num * num1 < 100) {
    console.log(num2 - num3);
  } else {
    alert((num0 * num1 * num2) / num3);
  }
}
