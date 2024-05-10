"use strict";
const anyString = "ABC? ABC! ABC$";
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
	number = parseInt(number);
	function convertNumber(n) {
		let num = n;
		if (num < 0 ) {
			num = -num;
		}
		if (num == -0) {
			num = 0;
		}
		if (num != 0) {
			num = num % 9;
			if (num == 0) {
				num = 9;
			}
		}
		return num;
	}
	return convertNumber(number);
}
console.log(converLetter(anyString));
