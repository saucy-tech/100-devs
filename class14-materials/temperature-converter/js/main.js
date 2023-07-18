//Write your pseduo code first!

//Capture input
document.querySelector("#convert").addEventListener("click", convertor);

//Perform calculation
function convertor() {
  const tempC = document.querySelector("#tempC").value;
  const tempF = tempC * (9 / 5) + 32;
  document.querySelector("#tempF").innerText = `${tempF}`;
}

//Show temperature
