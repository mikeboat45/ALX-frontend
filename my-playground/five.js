const{argv} = require('node:process');

let size = argv;

try {
	if (isNaN(size[2])) {
		console.log("Not a number"); 
	} else {
		console.log('My number: ' + size[2]);
	}
} catch (error) {
	console.error('An unexpected runtime error occured:', error.message);
	console.log('code failed');
}
