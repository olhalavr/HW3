//First task

const number = 45;

if (number % 3 == 0 && number % 5 == 0) {
    console.log('FizzBuzz');
} else if (number % 5 == 0) {
    console.log('Buzz');
} else if (number % 3 == 0) {
    console.log('Fizz');
} else {
    console.log('Not a Buzz, Fizz or FizzBuzz :(');
}

//Second task

const year = 1600;

if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
    console.log('leap year');
} else {
    console.log('low-pitched year');
}

//Third task

let age = -8;
let count = age % 100;
let textResult = '';

if (count >= 10 && count <= 20) {
    textResult = 'років';
} else {
    if (count === 1) {
        textResult = 'рік';
    } else if (count >= 2 && count <= 4) {
        textResult = 'роки';
    } else {
        textResult = 'років';
    }
}
console.log('Вам ' + age + ' ' + textResult);
