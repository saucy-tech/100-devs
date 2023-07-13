//Write your pseduo code first!

//need the value that is in c
document.querySelector("#convert").addEventListener("click", conversion);

//convert from c to f
function conversion() {
  const c = document.querySelector("#c").value;
  const f = c * 1.8 + 32;
  document.querySelector("#f").innerText = `${f}`;
}

//show f
