function swapCase(str) {
  return str
    .split("")
    .map(ch =>
      ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase()
    )
    .join("");
}


console.log(swapCase("The Quick Brown Fox"));
