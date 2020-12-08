let getButton = document.querySelector("#changeImage");
let imageState = 1;
getButton.addEventListener("click", changeImage);

function changeImage() {
  if (imageState === 1) {
    document.getElementById("image").src = "img/smiley.gif";
    imageState = imageState + 1;
  } else {
    document.getElementById("image").src = "img/landscape.jpg";
    imageState = imageState - 1;
  }
}
