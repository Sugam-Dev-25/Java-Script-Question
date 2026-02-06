function secondLowestGreatest(arr) {
  const unique = [...new Set(arr)].sort((a, b) => a - b);
  return [unique[1], unique[unique.length - 2]];
}


console.log(secondLowestGreatest([1,2,3,4,5]));
