//click contestant and get the photo or popup with wrong

//create an array of contestants
Array.from(document.querySelectorAll(".contestant")).forEach((Element) =>
  Element.addEventListener("click", checkForRose)
);

//function to show rose
function checkForRose(click) {
  if (click.target.classList.contains("rose")) {
    document.querySelector("#nikki").classList.toggle("hidden");
  } else {
    alert("wrong!");
  }
}
