const fs = require("fs");
fs.readFile("test.json", (err, b) => {if (err) {throw err;}
	const a = JSON.parse(b);
	console.log(a);});
