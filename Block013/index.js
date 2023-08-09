// if statement to see weather or not the student passed his class write an else if
// 1.. If student's grade is greater than or equal to 60
// Print "passed"
//else
//Print "failed"

// let stGrade = 70;
// if (stGrade >= 60) {
//     console.log("passed");
// } else {
//     console.log("failed");
// }

// if val is true
// print true
// if val is false
//print corresponding result


var b = false;
if (b === false) {
    console.log("The boolean value false is falsysy");
} else if (b === null) {
    console.log("null")
} else if (b === 0) {
    console.log("the number 0 is falsy")
}

//the boolean value false is falsy

var b = null;
if (b === false) {
    console.log("The boolean value false is falsysy");
} else if (b === null) {
    console.log("null")
} else if (b === 0) {
    console.log("the number 0 is falsy")
}

//print null is falsy

var b = undefined;
if (b === false) {
    console.log("The boolean value undefined is falsysy");
} else if (b === undefined) {
    console.log("undefined is false")
} else if (b === 0) {
    console.log("the number 0 is falsy")
}

//undefined is falsy

var b = 0;
if (b === false) {
    console.log("The boolean value undefined is falsysy");
} else if (b === undefined) {
    console.log("undefined is false")
} else if (b === 0) {
    console.log("the number 0 is falsy")
}

//the number 0 is falsy

var b = "";
if (b === false) {
    console.log("The boolean value undefined is falsysy");
} else if (b === "") {
    console.log(" blank is falsy")
} else if (b === 0) {
    console.log("the number 0 is falsy")
}

// "" is falsy

//set number values to determine which else if statemwnt is true
//set console log
//this is pair and compare
//determine number values
console.log("\n The number line ")
let num1 = 50;
let num2 = 51;
let total = num1 + num2;
if (total < -1000) {
    console.log(total + " is less than -1000");
} else if (total > 100) {
    console.log(total + "is greater than 100")
} else if (total == 0) {
    console.log(total + "is equal to zero")
} else if (total > 0 && total > 100) {
    console.log(total + "is larger than zero and 100")
} else if (total < 0 && total > -1000) {
    console.log(total + "is a negative number")
}

//set value types
//determine if param is >= 5
//test in terminal
console.log("\n greater than or equal to 5 ")
let number1 = 5;
let number2 = 6;
if (number1 >= 5 && number2 >= 5) {
    console.log(true)
} else console.log(false)

let number3 = 10;
let number4 = 11;
if (number3 >= 5 && number4 >= 5) {
    console.log(true)
} else console.log(false)

let number5 = 0;
let number6 = 0;
if (number5 >= 5 && number6 >= 5) {
    console.log(true)
} else console.log(false)

let number7 = 1000;
let number8 = -1000;
if (number7 >= 5 && number8 >= 5) {
    console.log(true)
} else console.log(false)

let number9 = 6;
let number10 = 4;
if (number9 >= 5 && number10 >= 5) {
    console.log(true)
} else console.log(false)

let number11 = 5;
let number12 = 5;
if (number11 >= 5 && number12 >= 5) {
    console.log(true)
} else console.log(false)

//are the first 2 or last 2 statements true
//is so the statement iis true 
//only one statement has to be true
//write else if statement is false
console.log("\n pair and compair")

let param1A = "cat"
let param1B = "cat"
let param2A = "6"
let param2B = "6"
if ((param1A === "cat" && param1B === "cat") || (param2A === 6 && param2B === "6")) {
    console.log(true)
} else console.log(false)

let para1A = "five"
let para1B = 5
let para2A = "dog"
let para2B = "dawg"
if ((para1A === "five" && para1B === 5) || (para2A === "dog" && para2B === "dawg")) {
    console.log(true)
} else console.log(false)

let par1A = 0
let par1B = false
let par2A = "horse"
let par2B = "horse"
if ((par1A === 0 && par1B === false) || (par2A === "horse" && par2B === "horse")) {
    console.log(true)
} else console.log(false)

let pa1A = "eight"
let pa1B = "eight"
let pa2A = "ate"
let pa2B = "ate"
if ((pa1A === "eight" && pa1B === "eight") || (pa2A === "ate" && pa2B === "ate")) {
    console.log(true)
} else console.log(false)

let p1A = 11
let p1B = "eleven"
let p2A = "four"
let p2B = "for"
if ((p1A === 11 && p1B === "eleven") || (p2A === "four" && p2B === "for")) {
    console.log(true)
} else console.log(false)

let pi1A = "cake"
let pi1B = "cake"
let pi2A = "pie"
let pi2B = "pie"
if ((pi1A === "cake" && pi1B === "cake") || (pi2A === "pie" && pi2B === "pie")) {
    console.log(true)
} else console.log(false) 