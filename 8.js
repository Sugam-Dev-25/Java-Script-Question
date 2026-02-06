function secondLowestGreatest(arr) {
  const uniqueArr = [...new Set(arr)].sort((a, b) => a - b);

  return {
    secondLowest: uniqueArr[1],
    secondGreatest: uniqueArr[uniqueArr.length - 2]
  };
}


console.log(secondLowestGreatest([1, 2, 3, 4, 5]));
