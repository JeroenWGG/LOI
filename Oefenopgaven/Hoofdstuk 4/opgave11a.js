let invoer = document.querySelector("#invoerDatum");
invoer.onchange = checkDate;

function checkDate() {
  let datum = invoer.value;
  console.log("Checking date");
  if (checkIfDate(datum)) {
    document.querySelector(".result").innerText = "Datum is juist";
  } else {
    document.querySelector(".result").innerText = "Datum is onjuist";
  }
}

function checkIfDate(datum) {
  var patroon = /^\d{2}-\d{2}-\d{4}$/;
  if (patroon.test(datum)) {
    return true;
  } else {
    return false;
  }
}
