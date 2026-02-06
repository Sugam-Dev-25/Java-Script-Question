const students = [
  { name: "David", marks: 80 },
  { name: "Vinoth", marks: 77 },
  { name: "Divya", marks: 88 },
  { name: "Ishitha", marks: 95 },
  { name: "Thomas", marks: 68 }
];

let total = 0;
students.forEach(s => total += s.marks);

const average = total / students.length;

let grade;
if (average < 60) grade = "F";
else if (average < 70) grade = "D";
else if (average < 80) grade = "C";
else if (average < 90) grade = "B";
else grade = "A";

console.log("Average:", average);
console.log("Grade:", grade);
