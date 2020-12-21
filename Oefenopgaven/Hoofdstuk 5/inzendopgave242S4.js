//declare variables
let getVerstuurKnop = document.querySelector("#verstuurKnop");
let getForm = document.querySelector("#formContainer");
let getVoornaamInput, getAchternaamInput, getPuntenInput;
let getVoornaam = document.querySelector("#voornaamInput");
let getAchternaam = document.querySelector("#achternaamInput");
let getPunten = document.querySelector("#puntenInput");
let getTable = document.querySelector("#tableContainer");
let output = document.querySelector(".outputResult");

//declare eventlisteners
getVerstuurKnop.addEventListener("click", addInformation);

//functions
function addInformation() {
  output.innerHTML = "";
  if (checkVoornaam() && checkAchternaam() && checkPunten()) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td1Text = document.createTextNode(getVoornaamInput);
    td1.appendChild(td1Text);
    let td2 = document.createElement("td");
    let td2Text = document.createTextNode(getAchternaamInput);
    td2.appendChild(td2Text);
    let td3 = document.createElement("td");
    let td3Text = document.createTextNode(getPuntenInput);
    td3.appendChild(td3Text);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    getTable.appendChild(tr);
  } else {
    console.log("testFail");
  }
}

//check for letters, empty & length
function checkVoornaam() {
  getVoornaamInput = document.querySelector("#voornaamInput").value;
  if (!/^[A-Za-z]+$/.test(getVoornaamInput) && getVoornaamInput !== "") {
    return true;
  } else {
    failedForm(getVoornaam);
    output.innerHTML = "Vul een voornaam in zonder cijfers of speciale tekens";
    return false;
  }
}

//check for letters, empty & length
function checkAchternaam() {
  getAchternaamInput = document.querySelector("#achternaamInput").value;
  if (!/.*[^a-z].*/.test(getVoornaamInput) && getAchternaamInput !== "") {
    return true;
  } else {
    failedForm(getAchternaam);
    output.innerHTML =
      "Vul een achternaam in zonder cijfers of speciale tekens";
    return false;
  }
}

//check for numbers, empty & length
function checkPunten() {
  getPuntenInput = document.querySelector("#puntenInput").value;
  if (/^\d+$/.test(getPuntenInput) && getPuntenInput !== "") {
    return true;
  } else {
    output.innerHTML = "Vul de punten in met alleen getallen";
    failedForm(getPunten);
    return false;
  }
}

//failed form validation
function failedForm(field) {
  field.style.borderColor = "red";
}
