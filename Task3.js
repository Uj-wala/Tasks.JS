// Part 1 – Logical & Ternary Operator
// Q1: Check whether a number is between 10 and 50 using logical AND.
// Input: let num = 25
// Output: "Valid Number" or "Invalid Number"

let num = 25

if (num >= 10 && num <= 50 ){
    console.log("Valid Number");
} else {
    console.log("Invalid Number");   
}

// Q2: Check if a user is eligible to log in.
// Condition:
// username must be "admin"
// password must be "1234"
// Use logical AND.

let username = "admin"
let password = "1234"

if (username === "admin" && password === "1234") {
    console.log("logged in successfully");
    
} else {
    console.log("Invalid username or password");
    
}


// Q3: Using ternary operator:
// Check if a number is even or odd.

let a = 25

let result = ( a %2 == 0 ) ? "Even" : "Odd";
console.log(result);

// Q4: What is the output?
// console.log((10 === "10") || (5 > 2) && !(3 < 1));
// Explain step by step.

console.log((10 === "10") || (5 > 2) && !(3 < 1)); //true

// (10 === "10") --> false
// (5 > 2) --> true
// !(3 < 1) --> false

// So, the final answer will be true.

// Part 2 – Type Conversion

// Q5: Find the output and explain:
// console.log("5" + 2);
// console.log("5" - 2);
// console.log("5" * 2);
// console.log("5" / 2);

console.log("5" + 2);
//52
console.log("5" - 2);
//3
console.log("5" * 2);
//10
console.log("5" / 2);
//2.5

// Q6: Convert the following using explicit conversion:
// let value = "100";
// - Convert to Number
// - Convert to Boolean

let value = "100";
let numValue = Number(value);
console.log(numValue);

// Q7: What will be the output?
// console.log(Boolean(""));
// console.log(Boolean(" "));
// console.log(Boolean(0));
// console.log(Boolean([]));
// Explain why.

console.log(Boolean(""));//false
//Empty string returns false
console.log(Boolean(" "));//true
//Space is also a value so it is true
console.log(Boolean(0));//false
//0 is a false number
console.log(Boolean([]));//true
//arrays are objects



// Q8: Write a program:
// If marks >= 90 → Grade A
// If marks >= 75 → Grade B
// If marks >= 50 → Grade C
// Else → Fail
// Use if else if.

let marks = 86;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");   
} else {
    console.log("Fail");
    
}


// Q9: Traffic Signal Program using switch case:
// "red" → Stop
// "yellow" → Ready
// "green" → Go
// Default → Invalid Signal


let signal = "green";
switch (signal) {
  case "red":
    console.log("Stop");
    break;

  case "yellow":
    console.log("Ready");
    break;

  case "green":
    console.log("Go");
    break;

  default:
    console.log("Invalid Signal");
}

// Q10 (Nested If): Check eligibility:
// Age >= 18
// Height >= 160
// Weight >= 50
// If all true → "Selected"
// Else → show which condition failed.

let age = 23;
let height = 145;
let weight = 51;

if (age >= 18) {
  if (height >= 160) {
    if (weight >= 50) {
      console.log("Selected");
    } else {
      console.log("Not Selected: Weight condition failed");
    }
  } else {
    console.log("Not Selected: Height condition failed");
  }
} else {
  console.log("Not Selected: Age condition failed");
}


// Part 4 – Loops
// Q11: Print numbers from 1 to 20 using for loop.

// for(let i = 1; i <=20; i++) {
//     console.log(i);   
// }

// Q12: Print only odd numbers from 1 to 20.
for(let i = 1; i <= 20; i++) {
    if (i %2 !== 0) {
        console.log(i);
    }
    
}
// Q13: Using while loop:
// Print numbers from 10 to 1.
let j = 10;

while (j >= 1) {
    console.log(j);
    j--;    
}

// Q14: Using do-while loop:
// Print numbers from 1 to 5.

let k = 1;

do {
    console.log(k);
    k++;
} while (k <= 5);

// Q15: Using for-of loop:
// Print each character from:
// let word = "STACKLY"

let word = "STACKLY";

for (let char of word) {
  console.log(char);
}
// Q16: Using for-in loop:
// Print both key and value from:
// let student = {
// name: "Arun",
// course: "MERN",
// duration: "6 months"
// }

let student = {
  name: "Arun",
  course: "MERN",
  duration: "6 months"
};

for (let key in student) {
  console.log(key + " : " + student[key]);
}

// Real-Time Questions
// RT-1: Login System
// If username = "admin" AND password = "1234" → "Login Success"
// Else → "Invalid Credentials"
// Use logical operator + ternary.
let userName = "admin";
let passWord = "1234";

let Result = (userName === "admin" && passWord === "1234")
  ? "Login Success"
  : "Invalid Credentials";

console.log(Result);

// RT-2: Salary Bonus System
// If employee salary > 50000 AND experience > 3 years
// → Eligible for bonus
// Else → Not eligible
let salary = 60000;
let experience = 4;

if (salary > 50000 && experience > 3) {
  console.log("Eligible for bonus");
} else {
  console.log("Not eligible");
}

// RT-3: Shopping Discount
// If cart amount:
// >= 5000 → 20% discount
// >= 2000 → 10% discount
// < 2000 → No discount
// Use if-else if.
let cartAmount = 3200;

if (cartAmount >= 5000) {
  console.log("20% discount");
} else if (cartAmount >= 2000) {
  console.log("10% discount");
} else {
  console.log("No discount");
}


// RT-4: Even/Odd Counter
// Count how many even numbers between 1 to 50.
let evenCount = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    evenCount++;
  }
}

console.log("Even numbers count:", evenCount);

// RT-5: Dynamic Greeting System
// If hour between:
// 1–6 → Good Morning
// 7–12 → Morning
// 13–16 → Good Afternoon
// 17–19 → Good Evening
// Else → Good Night
let hour = 18;

if (hour >= 1 && hour <= 6) {
  console.log("Good Morning");
} else if (hour >= 7 && hour <= 12) {
  console.log("Morning");
} else if (hour >= 13 && hour <= 16) {
  console.log("Good Afternoon");
} else if (hour >= 17 && hour <= 19) {
  console.log("Good Evening");
} else {
  console.log("Good Night");
}
