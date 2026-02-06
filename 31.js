function mergeUnique(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}


console.log(mergeUnique([1,2,3], [2,3,4,5]));
