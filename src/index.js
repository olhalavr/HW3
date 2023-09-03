//First task

const prompt = require("prompt-sync")();
const userInput = prompt('Enter number ')
const parsedInput = parseInt (userInput);


if (userInput % 3 == 0 && userInput % 5 == 0) {
    console.log('FizzBuzz');
} else if (userInput % 5 == 0) {
    console.log('Buzz');
} else if (userInput % 3 == 0) {
    console.log('Fizz');
} else {
    console.log('Not a Buzz, Fizz or FizzBuzz :(');
}

//Second task

if (userInput % 4 == 0 && userInput % 100 == 0 && userInput % 400 == 0) {
    console.log('leap year');
} else {
    console.log('low-pitched year');
}

//Third task


let count = userInput % 100;
let textResult = '';

if (count >= 10 && count <= 20) {
    textResult = 'років';
} else {
    count = userInput % 10;
    if (count === 1) {
        textResult = 'рік';
    } else if (count >= 2 && count <= 4) {
        textResult = 'роки';
    } else {
        textResult = 'років';
    }
}
console.log('Вам ' + userInput + ' ' + textResult);
