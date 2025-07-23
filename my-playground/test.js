const{argv} = require('node:process');

let numbers = argv[2];
let divisor = argv[3];

// console.log(myArray);
// console.log(divisor);

function iDivide(numbers, divisor) {
    let divisibles = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % divisor === 0) {
            divisibles.push(numbers[i])
        }

    }
    console.log(divisibles);
}

iDivide(numbers, divisor)



