"use strict";
const decimal = 105;
function converter(n) {
	const hex = "0123456789ABCDEF";
	let number = n, hexArray = [], cHex = [];
	hexArray = hex.split("");
	if (number > 16) {
		let x, y;
		x = Math.floor(number / 16);
		cHex.push(x);
		y = number % 16;
		if (y < 10) {
			cHex.push(y);
		}
	}
	return cHex;
	}
console.log(converter(decimal));

