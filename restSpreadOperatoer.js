///rest operater use for array
// In arrays, the rest operator can be used to collect remaining elements into a new array.
//  This is particularly useful in functions and array destructuring
//array
const array = [1, 2, 3, 4, 5];
const [a, b, ...c] = array;
console.log("a", a);
console.log("b", b);
console.log("c", c);
// it must be last destructuring
// -----------------------
// RestOperator Destructing in Object
//object
const person = {
  id: "123",
  name: "saba",
  age: 20,
};
const { id, ...user } = person;
console.log(user);
console.log(id);
//function
const check = ({ id, ...user }, array) => {
  console.log(user);
  console.log(id);
  console.log(array);
};
check(person, array);
//// spread
//arrays
const array1 = [1, 2, 3, 4, 5, 6, 7, 8];

const array2 = array1;
array2[0] = 3;
console.log(array2);
console.log(array1);
