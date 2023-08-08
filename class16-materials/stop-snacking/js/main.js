//Create a function that grabs the number of snacks from the input and tells you to stop that many times

//create event listener for the button
document.querySelector("#help").addEventListener("click", snackGrabber);

//create the function
function snackGrabber() {
  //clear stops
  document.querySelector("#stops").innerText = "";
  //grab input
  let snackNum = Number(document.querySelector("input").value);
  //iterate
  for (let i = 1; i <= snackNum; i++) {
    document.querySelector("#stops").innerText += " Stop!";
  }
}
