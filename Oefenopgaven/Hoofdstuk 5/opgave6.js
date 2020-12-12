//declare variables
let getVerstuurKnop = document.querySelector("#verstuurKnop");
let getForm = document.querySelector("#formContainer");
let getVoornaamInput, getAchternaamInput, getPuntenInput;
let getTable = document.querySelector("#tableContainer");
let output = document.querySelector(".output");

//declare eventlisteners
getVerstuurKnop.addEventListener("click", addInformation);

//functions
function addInformation() {
  getVoornaamInput = document.querySelector("#voornaamInput").value;
  getAchternaamInput = document.querySelector("#achternaamInput").value;
  getPuntenInput = document.querySelector("#puntenInput").value;
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
}
