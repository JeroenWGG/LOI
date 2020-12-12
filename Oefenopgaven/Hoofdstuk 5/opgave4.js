//declare variables
let getVoornaam, getAchternaam;
let getVerstuurKnop = document.querySelector("#verstuurKnop");
let getLeesKnop = document.querySelector("#leesKnop");
let getForm = document.querySelector("#formContainer");
let output = document.querySelector(".output");

//declare eventlisteners
getVerstuurKnop.addEventListener("click", saveInformation);
getLeesKnop.addEventListener("click", showInformation);

//functions

function saveInformation() {
  getVoornaam = document.querySelector("#inputVoornaam").value;
  getAchternaam = document.querySelector("#inputAchternaam").value;
  getForm.reset();
}

function showInformation() {
  let p1 = document.createElement("p");
  let pText1 = document.createTextNode("Voornaam is " + getVoornaam);
  p1.appendChild(pText1);
  output.appendChild(p1);

  let p2 = document.createElement("p");
  let pText2 = document.createTextNode("Achternaam is " + getAchternaam);
  p2.appendChild(pText2);
  output.appendChild(p2);
}
