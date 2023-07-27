//goal: show photo of only the clicked contestant

//add event listeners for each contestant
document.querySelector("#andiNext").addEventListener("click", andiPhoto);
document.querySelector("#claireNext").addEventListener("click", clairePhoto);
document
  .querySelector("#sharleenNext")
  .addEventListener("click", sharleenPhoto);

//functions for each contestant
function andiPhoto() {
  document.querySelector("#andi").classList.toggle("hidden");
  document.querySelector("#claire").classList.add("hidden");
  document.querySelector("#sharleen").classList.add("hidden");
}

function clairePhoto() {
  document.querySelector("#andi").classList.add("hidden");
  document.querySelector("#claire").classList.toggle("hidden");
  document.querySelector("#sharleen").classList.add("hidden");
}

function sharleenPhoto() {
  document.querySelector("#andi").classList.add("hidden");
  document.querySelector("#claire").classList.add("hidden");
  document.querySelector("#sharleen").classList.toggle("hidden");
}
