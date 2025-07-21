let{argv} = require('node:process');

lang = ['C', 'Python', 'JavaScript'];

for (let i = 0; i < 1; i++ ) {
	console.log(`${lang[0]} is fun`);
	lang1 = lang.slice(0);
	console.log(`${lang1[1]} is cool`);
	lang2 = lang1.slice(1);
	console.log(`${lang[2]} is amazing`);
}
