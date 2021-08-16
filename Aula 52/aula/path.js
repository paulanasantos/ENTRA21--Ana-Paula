const path = require("path");

// console.log(__dirname);
// console.log(__filename);
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));
console.log(path.join(__dirname, "src", "teste.js"));
console.log(path.resolve("src", "teste"));
console.log(path.join("src", "teste"));