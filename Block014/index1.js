//contain numbers in arrys
//write for statement indicating index equals zero
//write if statement to filter out odd numbers
const numbers = [2, 4, 6, 8, 10, 11, 12];
const oddNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        oddNumbers.push(numbers[i]);
    }
}
console.log(oddNumbers);