"use strict";
const n = [1,5,10,50,100,500,1000];
const l = ["I","V","X","L","C","D","M"];
const arabicNumeral = 8;
let romanNumeral = "", x;
l.reverse();
function arabicToRoman(a) {
	for (x in n.reverse()) {
		if ((a % n[x]) != a) {
			if ((a % n[x]) > 0) {
				romanNumeral += l[x];
			}
			if ((a % n[x]) == 0) {
				let i = 0;
				while (i < (a % n[x - 1])) {
					romanNumeral += l[x];
					i += 1;
				}
			}
		}
	}
	return romanNumeral;
}
console.log(arabicToRoman(arabicNumeral));
