"use strict";
const decimal = 4095;
function converter(n) {
	const hex = "0123456789ABCDEF";
	const hexArray = hex.split("");
	let number = n, cHex = [], sHex;
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
		else {
			let numberDividedBySixteen2 = Math.floor(numberDividedBySixteen / 16);
			let x;
			for (x in hexArray) {
				if (numberDividedBySixteen2 == x) {
					cHex.push(hexArray[x]);
				}
			}
			let restFromDividing2 = numberDividedBySixteen % 16;
			let y;
			for (y in hexArray) {
				if (restFromDividing2 == y) {
					cHex.push(hexArray[y]);
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
	return sHex = cHex.join("");
}
console.log(converter(decimal));
