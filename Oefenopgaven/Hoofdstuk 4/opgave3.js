let newKassa = new Kassa(0);
let bedragVeld = document.querySelector("#bedrag");
let totaalKnop = document.querySelector("#totaal");
let resultaat = document.querySelector("#result");

//Kassa constructor
function Kassa(saldo) {
  this.saldo = saldo;
  this.telOp = function (bedrag) {
    this.saldo = this.saldo + Number(bedrag);
  };
  this.totaal = function (bedrag) {
    return this.saldo;
  };
}

//Checken of enter wordt gedrukt en is ingevuld
bedragVeld.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    //default event cancellen
    event.preventDefault();
    if (checkForNumber(bedragVeld.value)) {
      newKassa.telOp(bedragVeld.value);
      bedragVeld.value = "";
    } else {
      alert("Je moet een getal invullen...");
    }
  }
});

//Totaal berekenen en tonen op pagina
totaalKnop.addEventListener("click", function (event) {
  resultaat.innerHTML = newKassa.totaal();
});

//controleren of er een nummer zit in de string
function checkForNumber(t) {
  let regex = /\d/g;
  return regex.test(t);
}
