//Create a conditonal that checks their age
let age = 33;
//If under 16, tell them they can not drive
if (age < 16) {
  console.log("you can not drive");
}
//If under 18, tell them they can't hate from outside the club, because they can't even get in
else if (age >= 16 && age < 18) {
  console.log(
    "you can't hate from outside the club, because they can't even get in"
  );
}
//If under 21, tell them they can not drink
else if (age >= 18 && age < 21) {
  console.log("you can not drink");
}
//If under 25, tell them they can not rent cars affordably
else if (age >= 21 && age < 24) {
  console.log("you can not rent cars affordably");
}
//If under 30, tell them they can not rent fancy cars affordably
else if (age >= 24 && age < 30) {
  console.log("you can not rent fancy cars affordably");
}
//If under over 30, tell them there is nothing left to look forward too
else {
  console.log("there is nothing left to look forward too");
}

//--- Harder
//On click of the h1
document.querySelector("h1").addEventListener("click", ageChecker);
// //Take the value from the input
function ageChecker() {
  let pH = "";
  let age = document.querySelector("#danceDanceRevolution").value;
  if (age < 16) {
    pH = "you can not drive";
  } else if (age < 18) {
    pH = "you can't hate from outside the club, because they can't even get in";
  } else if (age < 21) {
    pH = "you can not drink";
  } else if (age < 30) {
    pH = "you can not rent cars affordably";
  } else if (age < 35) {
    pH = "you can not rent fancy cars affordably";
  } else {
    pH = "there is nothing left to look forward too";
  }
  document.querySelector("p").innerText = pH;
}
//Place the result of the conditional in the paragraph
