let getButton = document.querySelector("#buttonChangeStyle");
let getText = document.querySelector("#container > p");
let getContainer = document.querySelector("#container");
getButton.addEventListener("click", changeStyle);

function changeStyle() {
  getText.style.fontFamily = "arial";
  getText.style.fontSize = "24px";
  getText.style.color = "red";
  getText.style.backgroundColor = "blue";
}
