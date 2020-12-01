//Controleren van percentage
let invoerRentepercentage = document.querySelector("#invoerRentepercentage");
let getErrorPercentage = document.querySelector(".errorFieldRentepercentage");
invoerRentepercentage.onchange = checkPercentage;

function checkPercentage() {
  let percentage = invoerRentepercentage.value;
  if (/^(\d+|(\.\d+))(\.\d+)?%$/.test(percentage)) {
    invoerRentepercentage.style.borderColor = "#00FF00";
    getErrorPercentage.innerHTML = "";
    return true;
  } else if (percentage === "") {
    invoerRentepercentage.style.borderColor = "#999999";
    getErrorPercentage.innerHTML = "";
    return false;
  } else {
    invoerRentepercentage.style.borderColor = "red";
    getErrorPercentage.innerHTML = "Voer een percentage in";
    return false;
  }
}

//Controleren van bedrag
let invoerBedrag = document.querySelector("#invoerBedrag");
let getErrorBedrag = document.querySelector(".errorFieldBedrag");
invoerBedrag.onchange = checkBedrag;

function checkBedrag() {
  let bedrag = invoerBedrag.value;
  if (isNumeric(bedrag)) {
    getErrorBedrag.innerHTML = "";
    invoerBedrag.style.borderColor = "#00FF00";
    return true;
  } else if (bedrag === "") {
    invoerBedrag.style.borderColor = "#999999";
    getErrorBedrag.innerHTML = "";
    return false;
  } else {
    getErrorBedrag.innerHTML = "Voer een getal in";
    invoerBedrag.style.borderColor = "red";
    return false;
  }
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

//Controleren van datum
let invoerDatum = document.querySelector("#invoerDatum");
let getErrorDatum = document.querySelector(".errorFieldDate");
invoerDatum.onchange = checkDate;

function checkDate() {
  let datum = invoerDatum.value;
  if (checkIfDate(datum) && checkIfValidDate(datum)) {
    getErrorDatum.innerHTML = "";
    invoerDatum.style.borderColor = "#00FF00";
    return true;
  } else if (datum === "") {
    invoerDatum.style.borderColor = "#999999";
    getErrorDatum.innerHTML = "";
    return false;
  } else {
    return false;
  }
}

function checkIfValidDate(datum) {
  let arr = datum.split("-");
  let dag = arr[0];
  let maand = arr[1];
  let jaar = arr[2];

  if (dag < 1 || dag > 31) {
    getErrorDatum.innerHTML = "Dag is te groot of te klein(1 - 31)";
    invoerDatum.style.borderColor = "red";
    return false;
  }
  if (maand < 1 || maand > 12) {
    getErrorDatum.innerHTML = "Maand is te groot of te klein (1 - 12)";
    invoerDatum.style.borderColor = "red";
    return false;
  }
  if (jaar < 1900 || jaar > 2020) {
    getErrorDatum.innerHTML = "Jaar is te groot of te klein (1900 - 2020)";
    invoerDatum.style.borderColor = "red";
    return false;
  }

  switch (+maand) {
    case 2:
      if (isSchrikkelJaar(jaar)) {
        if (dag > 29) {
          getErrorDatum.innerHTML = "Februari heeft maar 29 dagen";
          invoerDatum.style.borderColor = "red";
          return false;
        }
      } else {
        if (dag > 28) {
          getErrorDatum.innerHTML = "Februari heeft maar 28 dagen";
          invoerDatum.style.borderColor = "red";
          return false;
        }
      }

      break;
    case 4:
    case 6:
    case 9:
    case 11:
      if (dag > 30) {
        getErrorDatum.innerHTML = "November heeft maar 30 dagen";
        invoerDatum.style.borderColor = "red";
        return false;
      }
      break;
  }
  return true;
}

function checkIfDate(datum) {
  let patroon = /^\d{2}-\d{2}-\d{4}$/;
  if (patroon.test(datum)) {
    return true;
  } else {
    getErrorDatum.innerHTML = "Voer een datum in (dd-mm-jjjj)";
    invoerDatum.style.borderColor = "red";
    return false;
  }
}

function isSchrikkelJaar(jaartal) {
  var isSchrikkel = false;
  if ((jaartal % 4 == 0) & (jaartal % 100 != 0)) {
    isSchrikkel = true;
  }
  if (jaartal % 400 == 0) {
    isSchrikkel = true;
  }
  return isSchrikkel;
}

//Berekenen van saldo verdubbeling
document.querySelector(".calculateButton").addEventListener("click", calculateTillDouble);


function calculateTillDouble() {
   //set starting variables
let getResult = document.querySelector("#result");
let startBedrag = invoerBedrag.value;
let bedrag = Number(invoerBedrag.value);
let percentage = invoerRentepercentage.value;
let percentageZonder = percentage.replace(/\% ?/g, "") / 100;
//change date into date object
let datum = invoerDatum.value;
let datumArray = datum.split("-");
let datumObject = new Date(datumArray[2],datumArray[1],datumArray[0]);
  console.log(startBedrag * 2 > bedrag);
  console.log(percentageZonder);
  if(startBedrag * 2 > bedrag){
    CalculateForYearAndReturn();
  }

  
  function CalculateForYearAndReturn(){
    bedrag = bedrag + (bedrag * percentageZonder);
    
    getResult.append(
    "Het bedrag is €" +
      bedrag +
      " op " +
      datumObject.getFullYear() +
      " met een rentepercentage van " +
      percentage
  );

  }
}