"use strict";
const anyString = "ABC";
const letters = [];
let i = 97, j = 0, x;
while (i < 123) {
	letters.push(String.fromCharCode(i).toUpperCase());
	if (j + 1 > 9) {
		j = 0;
		letters.push(j += 1);
	}
	else {
		letters.push(j += 1);
	}
	i += 1;
}
for (x in letters) {
	console.log(letters[x]);
}
console.log(letters);
