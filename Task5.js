// TASK 1 – Employee Merge System (Spread Operator)
// You have:
// let empBasic = { name: "Naveen", role: "Trainee", salary: 20000 }
// let empPromotion = { role: "Developer", bonus: 10000 }
// Requirements:
// 1. Merge both objects using spread.
// 3. Add new property: experience: "2 years"
// 4. Print final employee object.

let empBasic = { name: "Naveen", role: "Trainee", salary: 20000 }
let empPromotion = { role: "Developer", bonus: 10000,experience: "2 years" }
let newEmp = {...empBasic,...empPromotion,salary : 40000}
console.log(newEmp);

// TASK 2 – Shopping Cart (Spread + Array)
// let cart1 = ["Shoes", "Shirt"]
// let cart2 = ["Watch", "Cap"]
// Requirements:
// // 1. Merge both carts.
// 2. Add "Bag" at the end.
// 3. Add "Socks" at the beginning.
// 4. Print final cart.
let cart1 = ["Shoes", "Shirt"]
let cart2 = ["Watch", "Cap"]
let newCart = ["Socks",...cart1,...cart2,"Bag"]
console.log(newCart);


// TASK 3 – Rest Operator Salary Calculator
// Create function:
// calculateTotalSalary(baseSalary, ...bonuses)
// Requirements:
// 1. Add all bonus values.
// 2. Return total salary.
// 3. Example:
// calculateTotalSalary(30000, 2000, 3000, 5000)
// Expected Output: Total Salary: 40000

function calculateTotalSalary(baseSalary, ...bonuses) {
  let totalBonus = bonuses.reduce((sum, b) => sum + b, 0);
return baseSalary + totalBonus;
}
let total = calculateTotalSalary(30000, 2000, 3000, 5000);
console.log("Total Salary:", total);

// TASK 4 – Advanced Destructuring
// let student = {
// name: "Rahul",
// marks: { maths: 90, science: 85, english: 88 }
// }
// Requirements:
// 1. Destructure name.
// 2. Destructure maths and science.
// 3. Print:
// Rahul scored 90 in maths and 85 in science
let student = {
name: "Rahul",
marks: {

    maths: 90,
    science: 85, 
    english: 88 
    }
};

let { name } = student;
let { maths, science } = student.marks;
console.log(`${name} scored ${maths} in maths and ${science} in science`);

// TASK 5 – Array Manipulation
// let numbers = [10,20,30,40,50]
// Requirements:
// 1. Remove 30 using splice.
// merge method
// 2. Add 25 in its place.
// let numbers = [10,20,30,40,50]
// numbers.splice(2,1,25)
// console.log(numbers);
// 3. Reverse array.
// 4. Check if 50 exists.
// 5. Print final array.
let numbers = [10,20,30,40,50]
let reverseVal = numbers.reverse()
console.log(numbers);
let exists = numbers.includes(50);
console.log("Final Array:", numbers);
console.log("50 exists:", exists);


// TASK 6 – Flatten Data
// let apiData = [1,2,[3,4,[5,6,[7,8]]]]
// Requirements:
// 1. Convert into single array.
// 2. Print output.
let apiData = [1,2,[3,4,[5,6,[7,8]]]]
let newdata = apiData.flat(Infinity)
console.log(newdata);

// 3. Find index of 6.
let newdata1 = apiData.indexOf(6);
console.log(newdata1);

// TASK 7 – Sorting Problem
// let prices = [100, 5, 25, 300, 45]
// Requirements:
// 1. Sort in ascending order properly.
let prices = [100, 5, 25, 300, 45]
let newprice = prices.sort()
console.log(newprice);

// BONUS HARD TASK – Team Level
// let users = [
// {name: "A", salary: 20000},
// {name: "B", salary: 40000},
// {name: "C", salary: 30000}
// ]
// Requirements:
// 1. Increase everyone salary by 5000 using spread.
// 2. Return new updated array.
// 3. Sort based on salary (high to low).

let users = [
  { name: "A", salary: 20000 },
  { name: "B", salary: 40000 },
  { name: "C", salary: 30000 }
];

let newUsers = users
  .map(user => ({
    ...user,
    salary: user.salary + 5000
  }))
  .sort((a, b) => b.salary - a.salary);

console.log(newUsers);
