a = 4;
b = 5;
c = 7;
// let max = a > b ? a : b;
let min = a < b ? (a < c ? a : c) : b < c ? b : c;
let max = a > b ? (a > c ? a : c) : b > c ? b : c;
console.log("max", max);
console.log("min", min);
