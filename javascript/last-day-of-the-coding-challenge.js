"use strict";
const luckyNumbers = [35, 49, 48, 68, 97, 121, 115, 79, 102, 67, 111, 100, 101];
let x, y;
for (x in luckyNumbers) {
	if (y == undefined) {
		y = String.fromCharCode(luckyNumbers[x]);
	}
	else {
		if (luckyNumbers[x] == 48) {
			y += 0;
		}
		y += String.fromCharCode(luckyNumbers[x]);
	}
}
console.log(y);
