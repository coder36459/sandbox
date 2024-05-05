"use strict";
let number = "-0123456789.0123456789";
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
console.log(convertNumber(number));
