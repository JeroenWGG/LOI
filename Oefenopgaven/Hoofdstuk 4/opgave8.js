let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];
let arr3 = [];

for (let i = 0; i < arr1.length; i++) {
  arr3.push(arr1[i] + arr2[i]);
}

for (let i = 0; i < arr3.length; i++) {
  document.querySelector(".result").append(arr3[i]);
}
