"use strict";
const arabicNumeral = 2345;
function arabicToRoman(a) {
	const numerals = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
	const letters = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
	let romanNumeral = "", count, division, i, x;
	numerals.reverse();
	letters.reverse();
	count = a;
	if (count > 0 && count < 4000) {
		for (x in numerals) {
			division = Math.floor(count / numerals[x]);
			if (division > 0) {
				if (division == 1 && count > 0) {
					romanNumeral += letters[x];
					count -= numerals[x];
				}
				if (division >= 2 && division < 4) {
					i = division;
					while (i > 0) {
						romanNumeral += letters[x];
						count -= numerals[x];
						i -= 1;
					}
				}
			}
		}
	}
	else {
		console.log("Only numbers from 1 to 3999 can be chosen.");
	}
	//console.log(count);
	//console.log(a);
	return romanNumeral;
}
console.log(arabicNumeral + " in Roman numerals is " + arabicToRoman(arabicNumeral),"\n");

let allPossibleCombinations = 1;
console.log("Below you will find all possible combinations.\n");
while (allPossibleCombinations < 4000) {
	console.log("",allPossibleCombinations,"\t",arabicToRoman(allPossibleCombinations));
	allPossibleCombinations += 1;
}
