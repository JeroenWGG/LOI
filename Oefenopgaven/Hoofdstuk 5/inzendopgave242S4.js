//declare variables
let getVerstuurKnop = document.querySelector("#verstuurKnop");
let getVerstuurKnop2 = document.querySelector("#verstuurKnop2");
let getForm = document.querySelector("#formContainer");
let getVoornaamInput, getAchternaamInput, getPuntenInput;
let getVoornaam = document.querySelector("#voornaamInput");
let getAchternaam = document.querySelector("#achternaamInput");
let getPunten = document.querySelector("#puntenInput");
let getTable = document.querySelector("#tableContainer > tbody");
let output = document.querySelector(".outputResult");

//declare eventlisteners
getVerstuurKnop.addEventListener("click", addInformation);
getVerstuurKnop2.addEventListener("click", deleteTableRow);

//functions
function addInformation() {
  output.innerHTML = "";
  if (checkVoornaam() && checkAchternaam() && checkPunten()) {
    let tr = document.createElement("tr");
    let td0 = document.createElement("td");
    let td0Text = document.createTextNode(getTableNumber());
    td0.appendChild(td0Text);
    let td1 = document.createElement("td");
    let td1Text = document.createTextNode(getVoornaamInput);
    td1.appendChild(td1Text);
    let td2 = document.createElement("td");
    let td2Text = document.createTextNode(getAchternaamInput);
    td2.appendChild(td2Text);
    let td3 = document.createElement("td");
    let td3Text = document.createTextNode(getPuntenInput);
    td3.appendChild(td3Text);
    tr.appendChild(td0);
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
  if (/^[a-zA-Z ]+$/.test(getVoornaamInput) && getVoornaamInput !== "") {
    passedForm(getVoornaam);
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
  if (/^[a-zA-Z ]+$/.test(getAchternaamInput) && getAchternaamInput !== "") {
    passedForm(getAchternaam);
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
    passedForm(getPunten);
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

//passed form validation
function passedForm(field) {
  field.style.borderColor = "green";
}

//get table number based on current form
function getTableNumber() {
  let tableNumber =
    document.querySelectorAll("#tableContainer > tbody > tr > td").length / 4;
  return tableNumber;
}

//delete table row
function deleteTableRow() {
  let getSelectedNumber = Number(document.querySelector("#numberInput").value);
  let getSectedNumberField = document.querySelector("#numberInput");
  if (checkRowNumber(getSelectedNumber)) {
    let getRows = document.querySelectorAll("#tableContainer > tbody > tr");
    getRows[getSelectedNumber].remove();
    updateTableNumbers();
    output.innerHTML = "";
    passedForm(getSectedNumberField);
  } else {
    output.innerHTML = "Rijnummer bestaat niet";
    failedForm(getSectedNumberField);
  }
}

//update table numbers
function updateTableNumbers() {
  let getRows = document.querySelectorAll("#tableContainer > tbody > tr > td");
  let tableNumberCounter = 1;
  for (let i = 4; i < getRows.length; i = i + 4) {
    getRows[i].innerHTML = tableNumberCounter;
    tableNumberCounter = tableNumberCounter + 1;
  }
}

//check if row exists
function checkRowNumber(rowNumber) {
  let adjustedRowNumber = rowNumber + 1;
  let getRow = document.querySelector(
    "#tableContainer > tbody > tr:nth-child(" + adjustedRowNumber + ")"
  );
  if (getRow === null) {
    return false;
  } else if (adjustedRowNumber === 1) {
    return false;
  } else {
    return true;
  }
}
