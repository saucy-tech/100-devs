//Create a function that has a loop that prints '21' 21 times to the console and then call that function
function console21() {
  for (let i = 1; i < 22; i++) {
    console.log(21);
  }
}

//Bonus can you make it print '21' 21 times to the dom?
// document.querySelector('#savageSays').
function console21() {
  for (let i = 1; i < 22; i++) {
    document.querySelector("#savageSays").innerText += "/br 21";
  }
}
