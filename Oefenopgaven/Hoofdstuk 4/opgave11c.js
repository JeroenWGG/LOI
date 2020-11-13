let invoer = document.querySelector("#invoerDatum");
invoer.onchange = checkDate;

function checkDate() {
  let datum = invoer.value;
  if (checkIfDate(datum) && checkIfValidDate(datum)) {
    document.querySelector(".result").innerText = "Datum is juist";
  } else {
    document.querySelector(".result").innerText = "Datum is onjuist";
  }
}

function checkIfValidDate(datum) {
  let arr = datum.split("-");

  let dag = arr[0];
  let maand = arr[1];
  let jaar = arr[2];

  if (dag < 1 || dag > 31) {
    console.log("Dag is te groot of te klein(1 - 31)");
    return false;
  }
  if (maand < 1 || maand > 12) {
    console.log("Maand is te groot of te klein (1 - 12)");
    return false;
  }
  if (jaar < 1900 || jaar > 2020) {
    console.log("Jaar is te groot of te klein (1900 - 2020)");
    return false;
  }

  switch (+maand) {
    case 2:
      if (isSchrikkelJaar(jaar)) {
        if (dag > 29) {
          console.log("Februari heeft maar 29 dagen");
          return false;
        }
      } else {
        if (dag > 28) {
          console.log("Februari heeft maar 28 dagen");
          return false;
        }
      }

      break;
    case 4:
    case 6:
    case 9:
    case 11:
      if (dag > 30) {
        console.log("November heeft maar 30 dagen");
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
