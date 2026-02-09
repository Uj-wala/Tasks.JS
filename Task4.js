// SECTION 1 – Real-Time Function Logic

// 1. Payroll System:
// Create calculateSalary(basicSalary, bonusPercentage)
// - Calculate bonus
// - Deduct 5% tax
// - Return final salary
// - Print full salary breakdown

function calculateSalary(basicSalary, bonusPercentage) {
    let bonus = (basicSalary, bonusPercentage) / 100;
    let grossSalary = basicSalary + bonus;
    let tax = grossSalary * 0.05;
    let finalSalary = grossSalary - tax;
    
    console.log("Basic Salary :", basicSalary);
    console.log("Bonus :", bonus);
    console.log("Gross Salary :", grossSalary);
    console.log("Tax (5%) :", tax);
    console.log("Final Salary :", finalSalary);
    
    return finalSalary;
}

calculateSalary(30000, 10);

// 2. Student Result System:
// Create generateResult(name, marksArray)
// - Calculate total
// - Calculate average
// - Decide Grade (A/B/C/Fail)
// - Return result object

function generateResult(name, marksArray) {
    let total = marksArray.reduce((sum, mark) => sum + mark, 0);
    let average = total / marksArray.length;

    let grade;
    if (average >= 80)
        grade = "A";
    else if (average >= 60) 
        grade = "B";
    else if (average >= 30)
        grade = "C";
    else grade = "Fail";

    return {
        name : name,
        total : total,
        average : average,
        grade : grade
    };
}

let result = generateResult("ujwala",[78,87,69,76,95]);
console.log(result);

// 3. Debug This Code:

// function demo(){
// if(true){
// var a = 10;
// let b = 20;
// }
// console.log(a);
// console.log(b);
// }

// Questions:
// - What will happen?
// This code prints the a = 10.
// It returns b as a ReferenceError, it is because let is a block scope.

// - Why?
// - Fix it properly.

// it can be fixed by replacing the var into let. 


function demo() {
if(true) {
    let a = 10;
    let b = 20;

    console.log(a);
    console.log(b);
    }
}
demo();

// 4. Hoisting Analysis:
// console.log(x);
// var x = 100;
// console.log(y);
// let y = 200;
// Predict output and explain.

// For value x it is undefined
// for value y it gives us an ReferenceError. 


// SECTION 3 – Callback & Higher Order (Industry Simulation)

// 5. Order Processing System:
// Create processOrder(orderId, callback)
// - Print "Order Processed"
// - Call generateInvoice(orderId)

function generateInvoice(orderId) {
    console.log("Invoice generated for Order ID", orderId);
}

function processOrder(orderId, callback) {
    console.log("order processed");
    callback(orderId);
}

processOrder(300, generateInvoice);

// 6. Bank Transaction System:
// Create transaction(amount, type, callback)
// - If deposit → add
// - If withdraw → subtract
// - Call sendSMS()

let balance = 9000;

function sendSMS(message) {
    console.log("SMS sent :", message);
}
function transaction(amount, type,callback) {
    if (type === "deposit") {
        balance += amount;
        console.log("Deposit successful");        
    }
    else if (type === "withdraw") {
        balance -= amount;
        console.log("withdrawal successful");
    }
    else {
        console.log("Invalid transaction type");
        return;
    }

    callback("Current Balance :" + balance);
}

transaction(3000, "deposit", sendSMS);
transaction(2000, "withdraw", sendSMS);

// SECTION 4 – Currying (E-Commerce)

// 7. Dynamic Price Builder:
// Create priceBuilder(basePrice)(discount)(tax)
// Return final price
// Example: priceBuilder(2000)(15)(18)

function priceBuilder(basePrice) {
    return function (discount) {
        return function (tax) {
            let discountAmount = (basePrice * discount) / 100;
            let priceAfterDiscount = basePrice - discountAmount;

            let taxAmount = (priceAfterDiscount * tax) / 100;
            let finalprice = priceAfterDiscount + taxAmount;

            return finalprice;
        };
    };
}
console.log((priceBuilder(2000)(15)(18)));

// SECTION 5 – IIFE (Security + Encapsulation)

// 8. Secure Company Module:
// - Store private variable companyCode
// - Expose getCompanyStatus()
// - companyCode should not be directly accessible

let companyModule = (function () {
    let companyCode = "cOMP-2026";

    function getCompanyStatus() {
        return 'Company status activate | code: ${companycode}';
    }
    return {
        getCompanyStatus
    };
})();

console.log(companyModule.getCompanyStatus());
console.log(companyModule.companyCode);

// SECTION 6 – Generator (Advanced Logic)

// 9. Unique Order ID Generator:
// Generate ORD1001, ORD1002, ORD1003, etc.

function* orderIdGenerator() {
    let id = 1000;
    while (true) {
        id++;
        yield 'ORD${id}';
    }
}
let orderGen = orderIdGenerator();
console.log(orderGen.next().value);
console.log(orderGen.next().value);
console.log(orderGen.next().value);

// 10. Coupon Spin System:
// Yield:
// - 10% OFF
// - 20% OFF
// - 50% OFF
// - No Luck
// - Jackpot
// Simulate multiple spins.

function* couponSpin() {
    yield "10% OFF";
    yield "20% OFF";
    yield "50% OFF";
    yield "No Luck";
    yield "Jackpot";
}
let spin = couponSpin();
console.log(spin.next().value);
console.log(spin.next().value);
console.log(spin.next().value);
console.log(spin.next().value);
console.log(spin.next().value);


// SECTION 7 – Mini Project (Integrated)

// Mini E-Commerce Flow:
// - addToCart(product, price)
// - calculateTotal()
// - applyDiscount() using currying
// - generateCoupon() using generator
// - processPayment() using callback
// - Hide config using IIFE

const ecommrce = (() => {
  const cart = [];

const addToCart = (product, price) => {
    cart.push({ product, price });
    console.log(`${product} added`);
}
const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.price, 0);
}
const applyDiscount = total => discount => total - (total * discount / 100);
function* generateCoupon() {
    yield "10% OFF";
    yield "20% OFF";
    yield "50% OFF";
    yield "No Luck";
}
const processPayment = (amount, callback) => {
    console.log(`Processing payment of ₹${amount}`);
    callback(amount);
}
return {
    addToCart,
    calculateTotal,
    applyDiscount,
    generateCoupon,
    processPayment
  };
})();

ecommrce.addToCart("iphone 16", 50000);
ecommrce.addToCart("MacBook Pro", 200000);

let total = ecommrce.calculateTotal();
total = ecommrce.applyDiscount(total)(10);

const couponGen = ecommrce.generateCoupon();
console.log("Coupon:", couponGen.next().value);
ecommrce.processPayment(total, (amount) => {
  console.log(`Payment of ₹${amount} successful!`);
});

// Concept Questions:

// 1. Difference between function declaration & expression?
// function declarations are hoisted, function expressions are Notification.
// 2. What is higher order function?
// An higher order function is a function that accepts another function as an argument.
// 3. Real-time example of generator?
// Generators produce values on demand while remembering their State.
// 4. Why do we use IIFE?
// IIFE - Immediately invoked function expression
// It is used to create a private scope and protect data.
// 5. Difference between var, let, const?
// var is a function scope which allows reinitialization and redeclaration. whereas let is a block scope it doesnot allows redeclaration. And const is also a block scope but it doesnot allows for both redeclaration and reassigning the values.
