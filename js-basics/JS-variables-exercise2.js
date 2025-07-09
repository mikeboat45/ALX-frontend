/*/for use in the browser

let userName = prompt("Enter your name: ", "Michael");

let userAge = prompt("Enter your age: ", "24");

let yearOfBirth = new Date().getFullYear() - userAge;

alert(yearOfBirth);
*/
//for use in the terminal with node

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Please enter your name: ', (name) => {
	console.log(`Hello, ${name}!`);
	rl.close();
});
