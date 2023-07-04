document.querySelector("#check").addEventListener("click", check);

function check() {
  const day = document.querySelector("#day").value;

  if (day === "monday" || day === "wednesday" || day === "friday") {
    //how to add
  } else if (day === "tuesday" || day === "thursday") {
    //how to add
  } else day = "weekend";
}
