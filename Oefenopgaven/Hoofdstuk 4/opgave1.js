let Jeroen = new person("Jeroen", "Wiersma", 1995);
let Moni = new person("Moni", "Rensen", 1997);

function person(voornaam, achternaam, geboortejaar) {
  this.voornaam = voornaam;
  this.achternaam = achternaam;
  this.geboortejaar = geboortejaar;
  this.wijzigVoornaam = function(voornaam) {
    this.voornaam = voornaam;
  };
  this.wijzigAchternaam = function(achternaam) {
    this.achternaam = achternaam;
  };
  this.wijzigGeboortejaar = function(geboortejaar) {
    this.geboortejaar = geboortejaar;
  };
  this.gegevens = function() {
    return (
      "Voornaam: " +
      this.voornaam +
      ", Achternaam: " +
      this.achternaam +
      ", Geboortejaar: " +
      this.geboortejaar
    );
  };
}

document.querySelector("#persoon1").addEventListener("click", function() {
  toonGegevens(Jeroen);
});
document.querySelector("#persoon2").addEventListener("click", function() {
  toonGegevens(Moni);
});

document.querySelector("#wijzigPersoon1").addEventListener("click", function() {
  wijzigGegevens(Jeroen);
});

document.querySelector("#wijzigPersoon2").addEventListener("click", function() {
  wijzigGegevens(Moni);
});

function toonGegevens(person) {
  document.querySelector("#result").innerHTML = person.gegevens();
}

function wijzigGegevens(person) {
  let nieuweVoornaam = document.querySelector("#voornaam").value;
  let nieuweAchternaam = document.querySelector("#achternaam").value;
  let nieuweGeboortejaar = document.querySelector("#geboortejaar").value;
  if (nieuweVoornaam.length !== 0) {
    person.wijzigVoornaam(nieuweVoornaam);
  }
  if (nieuweAchternaam.length !== 0) {
    person.wijzigAchternaam(nieuweAchternaam);
  }
  if (nieuweGeboortejaar.length !== 0) {
    person.wijzigGeboortejaar(nieuweGeboortejaar);
  }
}
