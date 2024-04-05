"use strict";
const decimal = 12; //1005;
function converter(n) {
	const hex = "0123456789ABCDEF";
	const hexArray = hex.split("");
	let number = n, cHex = [];
	if (number > 16) {
		let x = Math.floor(number / 16);
		cHex.push(x);
		let y = number % 16;
		if (y < 10) {
			cHex.push(y);
		}
	}
	else {
		let x;
		for (x in hexArray) {
			if (number == x) {
				cHex.push(hexArray[x]);
			}
		}
	}
	return cHex;
}
console.log(converter(decimal));
