const{argv} = require('node:process');

/*for (let i = 0; i < argv[2]; i++) {
	if (isNaN(argv[2])) {
		console.log('Missing number of occurences');
	} else {
		console.log('C is fun');
	}
} */ 


if (isNaN(argv[2])) {
	console.log("Missing number of occurences");
} else {
	for (let i = 0; i < argv[2]; i++) {
		console.log("C is fun");
	}
}
