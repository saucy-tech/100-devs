//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtractTwo(n0, n1) {
  alert(n0 - n1);
}
subtractTwo(10, 8);
//create a function that divides three numbers and console logs the quotient
function divideThree(n0, n1, n2) {
  console.log(n0 / n1 / n2);
}
divideThree(15, 5, 2);
//create a function that multiplys three numbers and returns the product
function multiplyThree(n0, n1, n2) {
  return n0 * n1 * n2;
}
multiplyThree(6, 9, 420);
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function addThenModulus(n0, n1, n2) {
  return (n0 + n1) % n2;
}
addThenModulus(17, 5, 4);
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
