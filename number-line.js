// define first input Number
// define second input Number
// add first and second Number
// if added number is greater than 100, print "(sum) is greater than 100"
// else if added number is greater than 0 but less than 101, print "(sum) is greater than 0"
// else if added number is equal to 0, print "(sum) is equal to 0"
// else if added number is less than -1000, print "(sum) is less than -1000"
// else if added number is less than 0, print "(sum) is a negative number"
// else input value is not a number, print "(sum) is not a number"

// set first input number variable
let num1 = 50;
// set second input number variable
let num2 = 51;
// set sum variable of first and second input variables
let sum = num1 + num2;

// if/else-if/else statement:
// if sum variable is greater than 100
if (sum > 100) {
  // output "(sum) is greater than 100
  console.log(sum + " is greater than 100");
  // else if sum variable is greater than 0 but less than 101
} else if (sum > 0) {
  // output "(sum) is greater than 0"
  console.log(sum + " is greater than 0");
  // else if sum variable is equal to 0
} else if (sum === 0) {
  // output "(sum) is equal to 0"
  console.log(sum + " is equal to 0");
  // else if sum variable is less than -1000
} else if (sum < -1000) {
  // output "(sum) is less than -1000"
  console.log(sum + " is less than -1000");
  // else if sum variable is less than 0
} else if (sum < 0) {
  // output "(sum) is a negative number"
  console.log(sum + " is a negative number");
  // else input value is not a number, print "(sum) is not a number"
} else {
  console.log(sum + " is not a number");
}
