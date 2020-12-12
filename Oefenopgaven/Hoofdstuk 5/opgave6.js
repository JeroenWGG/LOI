//declare variables
let getVerstuurKnop = document.querySelector("#verstuurKnop");
let getForm = document.querySelector("#formContainer");
let getSelectVoornaam = document.querySelector(".selectVoornaam");
let getSelectAchternaam = document.querySelector(".selectAchternaam");
let output = document.querySelector(".output");

//declare eventlisteners
getVerstuurKnop.addEventListener("click", showInformation);

//functions
function showInformation() {
  output.innerHTML = "";
  let getSelectVoornaamOption =
    getSelectVoornaam.options[getSelectVoornaam.selectedIndex].value;
  let p1 = document.createElement("p");
  let pText1 = document.createTextNode(
    "Voornaam is " + getSelectVoornaamOption
  );
  p1.appendChild(pText1);
  output.appendChild(p1);

  let getSelectAchternaamOption =
    getSelectAchternaam.options[getSelectAchternaam.selectedIndex].value;
  let p2 = document.createElement("p");
  let pText2 = document.createTextNode(
    "Achternaam is " + getSelectAchternaamOption
  );
  p2.appendChild(pText2);
  output.appendChild(p2);
}
