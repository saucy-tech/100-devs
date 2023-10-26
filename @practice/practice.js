let fName = prompt("enter first name");
let lName = prompt("enter last name");
alert("hello " + fName + " " + lName);

let a = 2;
a -= 1;
a++; //2
let b = 8;
b += 2; //10
const c = a + b * b; //22
const d = a * b + b; //30
const e = a * (b + b); //40
const f = (a * b) / a; //10
const g = (b / a) * a; //10
console.log(a, b, c, d, e, f, g);

// Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.
price = Number(prompt("enter price of item"));
console.log((price += price * 0.206));

//Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.
//The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32.

tempC = Number(prompt("enter temp in C"));
console.log(tempC * (9 / 5) + 32);

//Variable swapping
let number1 = 5;
let number2 = 3;

number1 = number2;
number2 += 2;
console.log(number1); // Should show 3
console.log(number2); // Should show 5

//Add the necessary code to swap the values of variables number1 and number2.
