function removeDuplicates(arr) {
  return [...new Set(arr.map(i => i.toString().toLowerCase()))];
}


console.log(removeDuplicates(["A", "a", "B", "b", "C"]));
