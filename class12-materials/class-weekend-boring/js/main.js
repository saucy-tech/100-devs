document.querySelector("#check").addEventListener("click", check);

function check() {
  const day = document.querySelector("#day").value;

  if (day === "monday" || day === "wednesday" || day === "friday") {
    alert("today, " + day + ", is a boring day");
  } else if (day === "tuesday" || day === "thursday") {
    alert("today, " + day + ", is a class day!");
  } else if (day === "saturday" || day === "sunday") {
    alert("it's the weekend!");
  } else alert("please check input and try again");
}
