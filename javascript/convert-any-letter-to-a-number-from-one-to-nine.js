"use strict";
const anyString = "ABC";
function converLetter(str) {
	const letters = [];
	let i = 97, j = 0, aS = [], number = 0, x, y;
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
	aS = str.split("");
	for (x in letters) {
		for (y in aS) {
			if (letters[x] == aS[y]) {
				number += letters[parseInt(x) + 1];
			}
		}
	}
	return number;
}
console.log(converLetter(anyString));
