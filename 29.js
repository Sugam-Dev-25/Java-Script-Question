function removeFalsy(arr) {
  return arr.filter(Boolean);
}


console.log(removeFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));
