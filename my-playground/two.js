const{argv} = require('node:process');

let numberOfArguments = argv.length - 2;

if (numberOfArguments === 0) {
	console.log('No arguments');
} else if (numberOfArguments === 1) {
	console.log('An argument found');
} else {
	console.log('Arguments found');
}
