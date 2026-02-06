function removeFromRight(arr, n=1){
  return arr.slice(0, arr.length - n);
}

console.log(removeFromRight([1, 2, 3, 4], 2)); 