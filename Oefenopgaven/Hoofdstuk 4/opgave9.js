let a = [1, 2, 3, 4];

function keerom(array) {
  let times = array.length;
  for (let i = 0; i < times; i++) {
    array.splice(i, 0, array[times - 1]);
    array.splice(times, 1);
  }
  return array;
}

a = keerom(a);

console.log(a);
