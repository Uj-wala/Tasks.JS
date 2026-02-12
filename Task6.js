// SECTION 1 – Array Higher Order Methods Tasks

// Task 1 – forEach() Practice
// let subjects = ["Maths", "Science", "English", "History"]
// Requirements:
// • Use forEach()
// • Print Subject 1: Maths ... Subject 4: History
// • Store result in a variable
// • Question: Why does forEach() return undefined?

let subjects = ["Maths", "Science", "English", "History"];

let newsubject = subjects.forEach((subject, index) => {
    console.log(`Subject ${index + 1}: ${subject}`);
});
console.log("Result value:", newsubject);


// Task 2 – map() Practice
// let prices = [100, 200, 300, 400]
// Requirements:
// • Use map()
// let prices = [100, 200, 300, 400]
// let newprices = prices.map((c,i,t) => {
//     return("map :",c);
// })
// console.log(newprices);
// // • Add 10% GST
// • Return new array
// • Expected Output: [110, 220, 330, 440]
let prices = [100, 200, 300, 400]
let newPrices = prices.map(price => price + (price * 0.10));
console.log(newPrices);

// Task 3 – filter() Practice
// let students = [
//  { name: "A", marks: 45 },
//  { name: "B", marks: 75 },
//  { name: "C", marks: 35 },
//  { name: "D", marks: 85 }
// ]
// Requirements:
// • Use filter()
// • Get students scoring above 50
// • Print filtered array

let students = [
  { name: "A", marks: 45 },
  { name: "B", marks: 75 },
  { name: "C", marks: 35 },
  { name: "D", marks: 85 }
]

let studentmarks = students.filter((c,i,t) => {
    return c.marks > 50;
})
console.log(studentmarks);

// Task 4 – find() Practice
// Use same students array
// Requirements:
// • Use find()
// • Find first student scoring above 50
// • Print that object
// • Question: Difference between filter() and find()

let students1 = [
  { name: "A", marks: 45 },
  { name: "B", marks: 75 },
  { name: "C", marks: 35 },
  { name: "D", marks: 85 }
]

let newmarks = students1.find((c,i,t) => {
    return c.marks > 50;
})
console.log(newmarks);

//filter() : It prints all the values after the specific condition.
//find() : It prints the next value after the given condition.

// Task 5 – reduce() Practice
// let cart = [
//  { item: "Shirt", price: 1000 },
//  { item: "Shoes", price: 2000 },
//  { item: "Watch", price: 3000 }
// ]
// Requirements:
// • Use reduce()
// • Calculate total price

let cart = [
 { item: "Shirt", price: 1000 },
 { item: "Shoes", price: 2000 },
 { item: "Watch", price: 3000 }
]
// let newcart = cart.reduce((acc,c,i,t)=>{
//     return acc + c.price
// },0)
// console.log(newcart);

// • Bonus: Add 5% tax inside reduce()
let newcart = cart.reduce((ac,current) =>{
    return ac + current.price*1.05;

},0);
console.log(newcart);

// Task 6 – some() Practice

// let numbers = [1, 3, 5, 7, 8]
// Requirement:
// • Check if at least one number is even
// • Output: true

let numbers = [1, 3, 5, 7, 8]
let num = numbers.some((c,i,t)=>{
    return c%2==0
})
console.log(num);

// Task 7 – every() Practice
// let ages = [22, 25, 19, 30]
// Requirement:
// • Check if all ages are above 18
let ages=[22,25,19,30];
let newage = ages.every(age => age >18);
console.log(newage);

// Task 8 – sort() Practice
// let salaries = [50000, 10000, 70000, 30000]
// Requirements:
// Sort ascending
// Sort descending
let salaries = [50000, 10000, 70000, 30000]
let ascending=salaries.sort((a,b)=>a-b);
console.log(ascending);

let descending=salaries.sort((a,b)=> b-a);
console.log(descending);
// • Explain why normal sort() fails for numbers

// sort() fails because by default it converts elements to strings and sorts them in dictionary order, not numerically.

// Task 9 – Array Conversion Methods
// let arr = [10, 20, 30, 40]
// Requirements:
// • Convert using toString()
// • Convert using join("-")
// • Expected Output: 10-20-30-40

let arr = [10, 20, 30, 40]
let newarr = arr.toString()
let newarr1 = arr.join("-")
console.log(newarr);
console.log(newarr1);


// SECTION 2 – String Methods Tasks
// Task 10 – charAt() & charCodeAt()
// let word = "Developer"
// Requirements:
// • Get character at index 4
// • Get ASCII value of character at index 4

let word = "Developer"
let newword = word.charAt(4)
let newword1 = word.charCodeAt(4)
console.log(newword);
console.log(newword1);

// Task 11 – slice()
// let company = "StacklyCompany"
// Extract: Company

let company = "StacklyCompany"
let newcompany = company.slice(7,14)
console.log(newcompany);

// Task 12 – Case Conversion
// let userInput = "javaScript"
// • Convert to uppercase
// • Convert to lowercase

let userInput = "javaScript"
let newinput = userInput.toUpperCase()
let newinput1 = userInput.toLowerCase()
console.log(newinput1);
console.log(newinput);

// Task 13 – trim()
// let email = " naveen@gmail.com "
// Remove unwanted spaces

let email = " naveen@gmail.com "
let newemail = email.trim(" ")
console.log(newemail);

// Task 14 – includes()
// let message = "Welcome to JavaScript Training"
// Check if "JavaScript" exist

let message = "Welcome to JavaScript Training"
let newmessage = message.includes("JavaScript")
console.log(newmessage);

// Task 15 – split()
// let movie = "spider-man-no-way-home"
// Convert into array

let movie = "spider-man-no-way-home"
let newmovie = movie.split("-")
console.log(newmovie);

// Task 16 – indexOf() & lastIndexOf()
// let text = "programming"
// • Find first index of 'm'
// • Find last index of 'm'

let text = "programming"
let newtext = text.indexOf("m")
let newtext1 = text.lastIndexOf("m")

console.log(newtext);
console.log(newtext1);

// Task 17 – replace()
// let tech = "I love python"
// Replace python with javascript

let tech = "I love python"
let newtech = tech.replace("python","javascript")
console.log(newtech);

// Task 18 – startsWith() & endsWith()
// let filename = "report.pdf"
// • Check if starts with "report"
// • Check if ends with ".pdf"

let filename = "report.pdf"
let newfile = filename.startsWith("report")
let newfile1 = filename.endsWith(".pdf")
console.log(newfile1);
console.log(newfile);


// Task 19 – repeat()
// let star = "*"
// Print 10 stars using repeat()

let star = "*"
let newstar = star.repeat("10")
console.log(newstar);


// FINAL TEAM CHALLENGE – Employee Report System

// let employees = [
//  { name: "Naveen", salary: 50000 },
//  { name: "Arun", salary: 30000 },
//  { name: "Kiran", salary: 70000 }
// ]
// Requirements:
// • Convert names to uppercase using map()
// • Filter salary > 40000
// • Find first salary > 60000
// • Calculate total salary using reduce()
// • Sort salaries descending
let employees = [
 { name: "Naveen", salary: 50000 },
 { name: "Arun", salary: 30000 },
 { name: "Kiran", salary: 70000 }
]

let upperCase=employees.map(emp => ({
    ...emp,
    name:emp.name.toUpperCase()
}))

console.log(upperCase);

let highSalary=employees.filter(emp =>emp.salary >40000);
console.log(highSalary);

let highSalary1 = employees.find(emp => emp.salary > 60000);
console.log(highSalary1);

let totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);
console.log(totalSalary);

let Employees1 = [...employees].sort((a, b) => b.salary - a.salary);
console.log(Employees1);