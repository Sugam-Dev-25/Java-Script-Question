function sumArrays(a1, a2) {
  const length = Math.max(a1.length, a2.length);
  let result = [];

  for (let i = 0; i < length; i++) {
    result.push((a1[i] || 0) + (a2[i] || 0));
  }
  return result;
}


console.log(sumArrays([1,0,2,3,4], [3,5,6,7,8,13]));
