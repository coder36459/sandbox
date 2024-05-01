"use strict";
const n = [1,5,10,50,100,500,1000];
const l = ["I","V","X","L","C","D","M"];
const arabicNumeral = 10;
let romanNumeral = "", x;
l.reverse();
function arabicToRoman(a) {
	let i = a;
	while (i > 0) {
		for (x in n.reverse()) {
			if (a == n[x]) {
				romanNumeral += l[x];
				i -= n[x];
			}
		}
		//i -= 1;
	}
	/*
	for (x in n.reverse()) {
		if (a == n[x]) {
			romanNumeral += l[x];
		}
		else {
			if ((a % n[x]) != a) {
				if ((a % n[x]) > 0 && (a / n[parseInt(x) - 1]) < 0.9) {
					romanNumeral += l[x];
				}
				if ((a % n[x]) == 0 && (a % n[parseInt(x) - 1]) < 4) {
					let i = 0;
					while (i < (a % n[x - 1])) {
						romanNumeral += l[x];
						i += 1;
					}
				}
			}
			if ((a % n[x]) == a && (a / n[x]) >= 0.8 && (a % n[parseInt(x) + 1]) > 3) {
				romanNumeral = l[parseInt(x) + 2] + l[x];
			}
			if ((a % n[x]) == a && (a / n[x]) >= 0.8 && (a % n[parseInt(x) + 1]) == 0) {
				romanNumeral = l[parseInt(x) + 1] + l[x];
			}
		}
	}
	*/
	return romanNumeral;
}
console.log(arabicToRoman(arabicNumeral));
