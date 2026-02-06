function sortByTitle(arr) {
  return arr.sort((a, b) => a.title.localeCompare(b.title));
}


var books = [
  { title: "JavaScript" },
  { title: "HTML" },
  { title: "CSS" }
];

console.log(sortByTitle(books));
