let resultDiv = document.querySelector("#result");
let arrayViewer = [1, 2, 3, 4, 5];

function outputArray(arr) {
  for (ar of arr) {
    resultDiv.append(ar);
  }
}

let addToArrayButton = document.querySelector("#add");
addToArrayButton.addEventListener("click", addToArray);

outputArray(arrayViewer);

function clearArray() {
  resultDiv.innerHTML = "";
}

function addToArray() {
  arrayViewer.push(Number(document.querySelector("#inputField").value));
  clearArray();
  outputArray(arrayViewer);
}

let removeFromArrayButton = document.querySelector("#remove");
removeFromArrayButton.addEventListener("click", removeNumber);

function removeNumber() {
  arrayViewer.pop();
  clearArray();
  outputArray(arrayViewer);
}

let sortArrayA = document.querySelector("#sortArrayA");
sortArrayA.addEventListener("click", function() {
  arrayViewer.sort(function(a, b) {
    return a - b;
  });
  clearArray();
  outputArray(arrayViewer);
});

let sortArrayB = document.querySelector("#sortArrayB");
sortArrayB.addEventListener("click", function() {
  arrayViewer.sort(function(a, b) {
    return b - a;
  });
  clearArray();
  outputArray(arrayViewer);
});
