const evenNumbers = require("./numArray.js");
//This is a for loop for even numbers
//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const evenNumbers = [];
//for (let i = 0; i < numbers.length; i++) {
//if (numbers[i] % 2 !== 1) {
//    evenNumbers.push(numbers[i]);
//}
//}

//console.log(evenNumbers);

function tobaccoPrice(number) {
    return number % 2 !== 1;

}

const findEvens = evenNumbers.filter(number => tobaccoPrice(number.tobacco));
console.log(findEvens);


