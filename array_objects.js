const arrow = () => {
  return "value";
};
const arrays = [1, "one", true, null, undefined, [1, 2], { age: 20 }, arrow];
console.log(arrays);
console.log(arrays[7]());
console.log(arrays[6].age);
// methods off arry classes
// // push pop unshift shift includes indexof
// push
// this append new elemet and returne new length
arrays.push("new value");
console.log(arrays);
//pop
// can remove element from end and returne new lenght
arrays.pop();
console.log(arrays);
//we can add value at any index of array latter on and in between value will empty
arrays[20] = "new";
console.log(arrays);
///we can fine value in array and can update new value using ternery operator not if condition
arrays[arrays.indexOf("one") > -1 ? arrays.indexOf("one") : arrays.length] = 1;
// with Object find value with refrence
console.log(arrays[5].includes(1));

// objects
// objject have keys we can define by ourself
// if we add fun as key will definf as string
// they are intence of class in c++
// in js we can change value in array bust not change with value
//object can add at end
const obj = {};

// // De structuring
// for array[]
// for object{}
// for fun with array
// for fun with object
const person = {
  name: "saba",
  age: 20,
  geder: "f",
  adress: {
    city: "lahore",
  },
  array: [1, 2],
  sayHellow: function () {
    return "hellow saba";
  },
};

const person1 = {
  name: "tuba",
  age: 20,
  geder: "f",
  adress: {
    city: "lahore",
  },
  array: [1, 2],
  sayHellow: function () {
    return "hellow tuba";
  },
};

const { name } = person1;
console.log("person 1 name destructured-->", name);
