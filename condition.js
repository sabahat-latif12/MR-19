let a = 10;
let b = 5;

// Example 1: Simple if statement
if (a > b) {
  console.log(`${a} is greater than ${b}`);
}

// Example 2: if-else statement
if (a < b) {
  console.log(`${a} is less than ${b}`);
} else {
  console.log(`${a} is not less than ${b}`);
}

// Example 3: if-else if-else ladder
let c = 10;
if (c > b) {
  console.log(`${c} is greater than ${b}`);
} else if (c < b) {
  console.log(`${c} is less than ${b}`);
} else {
  console.log(`${c} is equal to ${b}`);
}

// Example 4: Nested if statements
let x = 5;
if (x > 0) {
  if (x % 2 === 0) {
    console.log(`${x} is a positive even number`);
  } else {
    console.log(`${x} is a positive odd number`);
  }
} else if (x < 0) {
  console.log(`${x} is negative`);
} else {
  console.log(`${x} is zero`);
}

// Example 5: Using logical operators in if conditions
let age = 20;
let hasDriverLicense = true;
if (age >= 18 && hasDriverLicense) {
  console.log(`You can drive`);
} else {
  console.log(`You cannot drive`);
}
