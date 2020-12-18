//declare variables
let getSelect = document.querySelector("#formContainer").childNodes[9];
let getSubmit = document.querySelector("#formContainer").childNodes[11];
let getForm = document.querySelector("#formContainer");
let getReset = document.querySelector("#result");

//declare eventlisteners
getSubmit.addEventListener("click", checkIfEmpty);

//helper functions
function nameIsEmpty() {
  let getNameInput = document.querySelector("#formContainer").childNodes[3]
    .value;
  if (getNameInput === "") {
    return true;
  } else {
    return false;
  }
}

function emailIsEmpty() {
  let getEmailInput = document.querySelector("#formContainer").childNodes[7]
    .value;
  if (getEmailInput === "") {
    return true;
  } else {
    return false;
  }
}

function selectIsEmpty() {
  let selectOption = getSelect.options[getSelect.selectedIndex].value;
  if (selectOption === "") {
    return true;
  } else {
    return false;
  }
}

//main function
function checkIfEmpty() {
  result.innerHTML = "";
  let nameEmpty = nameIsEmpty();
  let emailEmpty = emailIsEmpty();
  let selectEmpty = selectIsEmpty();
  if (nameEmpty === true) {
    let node = document.createElement("p");
    let nodeText = document.createTextNode(
      "Het naam veld is leeg, vul uw naam om door te gaan."
    );
    node.appendChild(nodeText);
    result.appendChild(node);
  }
  if (emailEmpty === true) {
    let node = document.createElement("p");
    let nodeText = document.createTextNode(
      "Het email veld is leeg, vul uw e-mail in om door te gaan."
    );
    node.appendChild(nodeText);
    result.appendChild(node);
  }
  if (selectEmpty === true) {
    let node = document.createElement("p");
    let nodeText = document.createTextNode(
      "Het kies u land veld heeft geen gekozen land, kies een land in om door te gaan."
    );
    node.appendChild(nodeText);
    result.appendChild(node);
  }
}
