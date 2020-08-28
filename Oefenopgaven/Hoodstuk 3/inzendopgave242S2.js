//declareer benodigde variabelen
let bedragInput = document.querySelector("#bedrag");
let totaal = document.querySelector("#totaal");
let totaalBedrag = 0;
let berekenBtwKnop = document.querySelector("#berekenBtw");
let btwResult = document.querySelector("#btw");
let totaalZonderBtwResult = document.querySelector("#totaalZonderBtw");
let result = document.querySelector("#result");
let reset = document.querySelector("#reset");

//bijhouden of iemand enter drukt in het input veld
bedragInput.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        //default event cancellen
        event.preventDefault();
        if(checkForNumber(this.value)){
          bedragToevoegen(this.value);
          totaalBedragToevoegen(this.value);
          bedragInput.value = "";
        } else {
          alert("Dit is geen getal! Voer een getal in.")
          bedragInput.value = "";
        }
    }
  })


//bedrag in list zetten en toevoegen aan undordered list
function bedragToevoegen(bedrag) {
  let liItem = document.createElement('li');
  liItem.textContent = bedrag;

  //eerst had ik hier append() maar dit werd niet ondersteund door internet explorer
  result.appendChild(liItem);
}

//totaalbedrag bijwerken en toevoegen aan inputveld
function totaalBedragToevoegen(bedrag){
    totaalBedrag = totaalBedrag + Number(bedrag);
    totaal.value = totaalBedrag;
}

//controleren of er een nummer zit in de string
function checkForNumber(t) {
  let regex = /\d/g;
  return regex.test(t);
}

//bijhouden of iemand op bereken btw knop klikt
berekenBtw.addEventListener("click", btwBerekenen);

//daadwerkelijk de btw btw berekenen
function btwBerekenen() {
  btwBedrag = totaalBedrag * 0.21;
  totaalBedragZonderBtw = totaalBedrag - btwBedrag;
  btwResult.innerHTML = "Het BTW bedrag is " + btwBedrag.toFixed(2);
  totaalZonderBtwResult.innerHTML = "Het totaalbedrag zonder BTW is " + totaalBedragZonderBtw.toFixed(2);
}

//bijhouden of iemand op reset klikt
reset.addEventListener("click", resetForm);

//formulieren, divjes & variabelen resetten
function resetForm() {
  btwResult.innerHTML = "";
  totaalZonderBtwResult.innerHTML = "";
  result.innerHTML = "";
  bedragInput.value = "";
  totaal.value = "";
  totaalBedrag = 0;
}
