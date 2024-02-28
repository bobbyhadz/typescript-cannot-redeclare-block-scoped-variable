export {};

// Error: Cannot redeclare block-scoped variable 'name'

// EXAMPLE 1 - Convert file to ES module

const name = 'Bobby Hadz';

console.log(name); // 👉️ "Bobby Hadz"

// ---------------------------------------------------

// // EXAMPLE 2 - Rename the variable to solve the error

// const employeeName = 'Bobby Hadz';

// console.log(employeeName); // 👉️ "Bobby Hadz"

// ---------------------------------------------------

// // EXAMPLE 3 - Redeclaring a variable in the same scope

// // ✅ using the `let` keyword
// let country = 'Germany';

// country = 'Austria';

// console.log(country); // 👉️ "Austria"

// ---------------------------------------------------

// // EXAMPLE 4 - Using an immediately invoked function expression

// const country = 'Germany';

// (function () {
//   // ✅ works as expected
//   const country = 'Austria';
//   console.log(country); // 👉️ 'Austria'
// })();

// console.log(country); // 👉️ "Germany"
