"use strict";
const decimal = 21; //1005;
function converter(n) {
	const hex = "0123456789ABCDEF";
	const hexArray = hex.split("");
	let number = n, cHex = [];
	if (number > 16) {
		let numberDividedBySixteen = Math.floor(number / 16);
		if (numberDividedBySixteen < 16) {
			let x;
			for (x in hexArray) {
				if (numberDividedBySixteen == x) {
					cHex.push(hexArray[x]);
				}
			}
		}
		let restFromDividing = number % 16;
		if (restFromDividing < 16) {
			let y;
			for (y in hexArray) {
				if (restFromDividing == y) {
					cHex.push(hexArray[y]);
				}
			}
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
