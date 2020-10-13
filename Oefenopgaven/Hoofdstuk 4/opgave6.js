let inputField = document.querySelector("#inputField");
inputField.onchange = calculation;
let resultField = document.querySelector("#result");
let inputFieldNumber;

function calculation() {
  let calculations = "<pre>";
  inputFieldNumber = Number(document.querySelector("#inputField").value);
  for (i = 1; i < 9; i++) {
    calculations += i + " " + inputFieldNumber + "<br>";
    inputFieldNumber += 0.25;
  }
  resultField.innerHTML = calculations;
}
