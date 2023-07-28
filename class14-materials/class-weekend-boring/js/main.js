//Enter day of the week get you have class for tue/thu, boring for mon/wed, and weekend for fri-sun
//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

//capture input
document.querySelector("#check").addEventListener("click", dayChecker);

//creat function
function dayChecker() {
  const enteredDay = document.querySelector("#day").value.toLowerCase();
  if (enteredDay == "tuesday" || enteredDay == "thursday") {
    console.log("class!");
  } else if (enteredDay == "monday" || enteredDay == "wednesday") {
    console.log("boring!");
  } else {
    console.log("weekend!");
  }
}
