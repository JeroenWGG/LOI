let buttonFunction = document.querySelector("#buttonFunction");
buttonFunction.addEventListener("click", tableOf10);
function tableOf10() {
  let tableOf = "<pre>";
  for (i = 1; i < 11; i++) {
    if (i < 10) {
      tableOf += " " + i + " * 10 =  " + i * 10 + "<br>";
    }
    if (i >= 10) {
      tableOf += i + " * 10 = " + i * 10 + "<br>";
    }
  }
  tableOf += "<pre>";
  result.innerHTML = tableOf;
}
