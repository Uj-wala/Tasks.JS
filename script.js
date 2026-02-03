
// 1. Welcome Program
// - Ask user name using prompt().
// let userName = prompt("What is your name")
// prompt = userName
  
// - Show alert: Hi , Welcome to JavaScript Training.
// alert("Hi " + userName + ", Welcome to JavaScript Training.");

// - Print the same message in console.
// console.log("Hi " + userName + ", Welcome to JavaScript Training.");

// 2. Console Methods Practice
// - Print 500 using console.log(), console.warn(), console.error().
console.log(500)
console.warn(500)
console.error(500)
// - Use console.clear().
console.clear()

// 3. Data Type Identification
// - Create string, number, boolean, undefined, and null variables.
// let str = "JavaScript";
// let number = 50;
// let bool = true;
// let undef;
// let nul = null;

// // - Print value and type using typeof.

// console.log(str, typeof str);
// console.log(num, typeof number);
// console.log(bool, typeof bool);
// console.log(undef, typeof undef);
// console.log(nul, typeof nul);

// 4. Arithmetic Operations
// - Use let a = 20 and let b = 5.
let a = 20
let b = 5
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);

// - Perform +, -, *, /, %, ** and print results.

// 5. Increment & Decrement
// - Demonstrate pre-increment, post-increment, pre-decrement, post-decrement.
// - Print variables clearly.

let c = 10;

console.log("Pre-Increment:", ++c);
console.log("Post-Increment:", c++);
console.log("After Post-Increment:", c);

console.log("Pre-Decrement:", --c);
console.log("Post-Decrement:", c--);
console.log("After Post-Decrement:", c);


// 6. Assignment Operators
// - Use let num = 10.
// - Perform +=, -=, *=, /=, %= and print results.

let num = 10;

num += 5;
console.log("+= :", num);

num -= 5;
console.log("-= :", num);

num *= 5;
console.log("*= :", num);

num /= 5;
console.log("/= :", num);

num %= 5;
console.log("%= :", num);

// 7. Array Access
// - Create array ['HTML','CSS','JavaScript','React'].
// - Print first element, second element, last element (using length), and total elements.

let array = ["HTML", "CSS", "JavaScript", "React"];

console.log("First Element:", array[0]);
console.log("Second Element:", array[1]);
console.log("Last Element:", array[array.length - 1]);
console.log("Total Elements:", array.length);

// 8. Modify Array
// - Add one element at end.
// - Remove last element.
// - Print updated array.

array.push("NodeJS");
array.pop();
console.log("Updated Array:", array);

// 9. Student Object
// - Create object with name, age, course, city.
// - Print values using dot notation.
let student = {
  name: "Ujwala",
  age: 23,
  course: "JavaScript",
  city: "Madanapalli"
};

console.log(student.name);
console.log(student.age);
console.log(student.course);
console.log(student.city);

// 10. Nested Object Practice
// - Create company object with nested trainer object.
// - Print company name, trainer name, trainer subject.

let company = {
  companyName: "Stackly",
  trainer: {
    name: "Naveen",
    subject: "JavaScript"
  }
};

console.log("Company Name:", company.companyName);
console.log("Trainer Name:", company.trainer.name);
console.log("Trainer Subject:", company.trainer.subject);

