//event listner to run function
document.querySelector("#finalRose").addEventListener("click", rose);
document.querySelector("#clear").addEventListener("click", clear);

//create function to hide losers
function rose() {
  document.querySelector("#claire").style.display = "none";
  document.querySelector("#sharleen").style.display = "none";
}

//creat function to resest
function clear() {
  document.querySelector("#claire").style.display = "initial";
  document.querySelector("#sharleen").style.display = "initial";
}
