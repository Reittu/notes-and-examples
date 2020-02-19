// Destructive (not pure)
function fyShuffle(arr) {
  let index;

  for (let i = 0; i < arr.length; i++) {
    index = Math.floor(Math.random() * (arr.length - i) + i);
    let temp = arr[index];
    arr[index] = arr[i];
    arr[i] = temp;
  }

}
