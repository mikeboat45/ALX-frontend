const{argv} = require('node:process');

if (argv[2] === undefined) {
	console.log('No argument');
} else {
	console.log(argv[2]);
} 

let argument = argv.slice(2);

let numberOfArguments = argv.length - 2;

if (numberOfArguments === 0) {
	console.log('Enter an argument');
} else if (numberOfArguments !== undefined) {
	argument.forEach(arg => {
		console.log(arg);
	});
}
