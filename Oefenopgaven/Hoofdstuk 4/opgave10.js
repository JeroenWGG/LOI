var arr1 = [1, 3, 5, 7, 9];
var arr2 = [2, 4, 6, 8, 10];
var arr3 = [];

function samenvoegen(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i]);
    arr3.push(arr2[i]);
  }
  console.log(arr3);
}

samenvoegen(arr1, arr2);
