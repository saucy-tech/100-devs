//Create an array of movie titles. Loop through the array and add each element to the h2.
let movies = [
  "The Fellowship of the Ring",
  "The Two Towers",
  "The Return of the King",
  "The Hobbit",
];
movies.forEach((x, i) => {
  document.querySelector("h2").innerText += movies[i];
});

//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
let numbers = [10, 20, 30];
// numbers.forEach((x, i) => {
//   numbers[i] = x + 3;
// });

//Find the average of all the numbers from the array numbers = [10, 20, 30];
let total = 0;
numbers.forEach((x) => {
  total += x;
});
console.log(total);
console.log(total / numbers.length);
