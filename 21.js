var arr1 = [3,'a','a','a',2,3,'a',3,'a',2,4,9,3];

let count = {};
let maxItem = null;
let maxCount = 0;

arr1.forEach(item => {
  count[item] = (count[item] || 0) + 1;
  if (count[item] > maxCount) {
    maxCount = count[item];
    maxItem = item;
  }
});

console.log(`${maxItem} ( ${maxCount} times )`);
