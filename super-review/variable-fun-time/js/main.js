//--- Easy
//create a variable and assign it a number
let myNum = 34;
//minus 10 from that number
myNum + -10;
//print that number to the console
console.log(myNum);

//--- Medium
//create a variable that holds a value from the input
let myInput = number(document.getElementById("danceDanceRevolution").value);
//add 25 to that number
myInput += 25;
//alert that number
alert(myInput);

//--- Hard
//create a variable that holds the h1
const headHolder = document.querySelector("h1");
//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener("click", adTwoNums);

function addTwoNums() {
  console.log(myNum + myInput);
}
