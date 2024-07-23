///Function Decleration
/// hoisting can do only in unction decleration like "we can call funtion without funtion defination"
function evenOdd(p1, p2) {
  console.log("p1..", p1);
  console.log("p2..", p2);
  return true;
}
evenOdd(1, 4);
// ----------------------

const newFunc = function (p1, p2) {
  console.log("p1..", p1);
  console.log("p2..", p2);
  return true;
};

console.log(newFunc(1, 3));
// function expression
//function use as refrence to variable
// they can store i variable

// -------------------------------
// defaultparameter
const newfun1 = function (p1 = 8, p2 = 9) {
  console.log("p1..", p1);
  console.log("p2..", p2);
};
newFunc1();

// arrow function always use with function expression
// aynnomous function also know as arrow fun
// if arrow fun not use as expression this only use with callback func in event handler
function evenOdd1(
  p1 = 7,
  p2 = ((prams) => {
    console.log("IIFE", prams);
    return 1;
  })("prams's value")
) {
  p1 % 2 == 0 ? console.log(`${p1} -> even`) : console.log(`${p1} -> Odd`);
  p2 % 2 == 0 ? console.log(`${p2} -> even`) : console.log(`${p2} -> Odd`);
}

evenOdd1();

//IFIE

// function want to call itself we can use iffi functionfunction that
// run when function is called with not assign argument
((prams) => {
  console.log("IIFE", prams);
  return 1;
})("prams's value");
