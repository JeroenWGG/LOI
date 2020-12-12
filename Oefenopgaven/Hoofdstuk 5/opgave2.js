let getButton = document.querySelector("#knop1");
let output = document.querySelector("#output");
getButton.addEventListener("click", createKnop);

function createKnop() {
  let knop = document.createElement("button");
  let knopText = document.createTextNode("Tweede knop");
  knop.setAttribute("id", "knop2");
  knop.setAttribute("onclick", "gelukt()");
  knop.appendChild(knopText);
  output.appendChild(knop);
}

function gelukt() {
  let el = document.createElement("el");
  let elText = document.createTextNode("Het is gelukt!");
  el.appendChild(elText);
  output.appendChild(el);
}
