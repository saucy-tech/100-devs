//event listener to run function
document.querySelector("#yell").addEventListener("click", run);

function run() {
  //create variables to select text
  const fName = document.querySelector("#firstName").value;
  const fMidName = document.querySelector("#firstMiddle").value;
  const lMidName = document.querySelector("#lastMiddle").value;
  const lName = document.querySelector("#lastName").value;

  //insert text
  const yellText = `${fName} ${fMidName} ${lMidName} ${lName}`;
  document.querySelector("#placeToYell").innerText = yellText;

  //speak text
  const synth = window.speechSynthesis;
  let yellThis = new SpeechSynthesisUtterance(yellText);
  synth.speak(yellThis);
}
