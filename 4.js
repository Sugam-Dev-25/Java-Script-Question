function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/\s+/g, "");
  return cleanStr === cleanStr.split("").reverse().join("");
}


console.log(isPalindrome("madam"));      
console.log(isPalindrome("nurses run")); 
