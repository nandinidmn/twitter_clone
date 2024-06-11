let text = "Mike Tyson is a former pro boxer";
let words = text.split(" ");
console.log(words);
// let [first, last, description] = words;
// console.log(first, last, description);
let [first, last, ...description] = words;
console.log(description);