//--- Easy
//create a variable and assign it a number
let myNum = 69;
//minus 10 from that number
myNum = myNum - 10;
//myNum -= 10
//print that number to the console
console.log(myNum);

//--- Medium
//create a variable that holds a value from the input
let myValue = document.querySelector("#danceDanceRevolution").value;
//add 25 to that number
myValue = myValue + 25;
//myValue += 25
//alert that number
alert(myValue);

//--- Hard
//create a variable that holds the h1
let h1Holder = document.querySelector("h1");

//add an event listener to that element that console logs the sum of the two previous variables
h1Holder.addEventListener("click", sum);

function sum() {
  console.log(myNum + myValue);
}
