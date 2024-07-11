// //const
// const a = 1;
// console.log("a before sope", a);
// {
//   console.log("in the sope", a);
//   const a = 1;
// }

// console.log("in outer sope", a);
// let

//let
let a = 1;
console.log("this let outer head", a);
{
  a = 3;
  console.log("this let inner head", a);
  a = 2;
  console.log("this let inner head", a);
}
console.log("this let most outer head", a);
