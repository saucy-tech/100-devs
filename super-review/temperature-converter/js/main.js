//Write your pseduo code first!
//add event listener to look for user click after entering temp
document.querySelector("h1").addEventListener("click", convert);

function convert() {
  //grab the value
  let inputTemp = Number(document.querySelector("input").value);
  //perform conversion
  let temp = inputTemp * 1.8 + 32;
  //display convereted temp
  document.querySelector("h2").innertext = temp;
}
