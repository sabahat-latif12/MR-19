// //const
// const a = 1;
// console.log("a before sope", a);
// {
//   console.log("in the sope", a);
//   const a = 1;
// }

// console.log("in outer sope", a);

//let
// let a = 1;
// console.log("this let outer head", a);
// {
//   let a = 3;
//   console.log("this let inner head", a);
//   a = "hello";
//   console.log("this let inner head", a);
// }
// console.log("this let most outer head", a);

// //var
var a = 4;
console.log("var outer scope", a);
{
  console.log("var BLOCK scope", a);
}
var a = "saba";

console.log("var outmost scope", a);
