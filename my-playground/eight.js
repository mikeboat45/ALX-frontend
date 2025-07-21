const{argv} = require('node:process');

function printSquare(size) {
/*	for (let i = 0; i < size; i++) {
		console.log('x '.repeat(size));
	}*/
	
	let i = 0;

	while (i < size) {
		console.log('x '.repeat(size));
		i++;
	}
}



printSquare(argv[2]);
