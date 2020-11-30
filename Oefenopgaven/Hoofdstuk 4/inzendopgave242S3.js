let invoerDatum = document.querySelector("#invoerDatum");
invoerDatum.onchange = checkDate;

function checkDate() {
  let datum = invoerDatum.value;
  if (checkIfDate(datum) && checkIfValidDate(datum)) {
    return true;
  } else {
    return false;
  }
}

function checkIfValidDate(datum) {
  let arr = datum.split("-");
  let getError = document.querySelector(".errorField");
  let dag = arr[0];
  let maand = arr[1];
  let jaar = arr[2];

  if (dag < 1 || dag > 31) {
    getError.innerHTML = "Dag is te groot of te klein(1 - 31)";
    return false;
  }
  if (maand < 1 || maand > 12) {
    getError.innerHTML = "Maand is te groot of te klein (1 - 12)";
    return false;
  }
  if (jaar < 1900 || jaar > 2020) {
    getError.innerHTML = "Jaar is te groot of te klein (1900 - 2020)";
    return false;
  }

  switch (+maand) {
    case 2:
      if (isSchrikkelJaar(jaar)) {
        if (dag > 29) {
          getError.innerHTML = "Februari heeft maar 29 dagen";
          return false;
        }
      } else {
        if (dag > 28) {
          getError.innerHTML = "Februari heeft maar 28 dagen";
          return false;
        }
      }

      break;
    case 4:
    case 6:
    case 9:
    case 11:
      if (dag > 30) {
        getError.innerHTML = "November heeft maar 30 dagen";
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
