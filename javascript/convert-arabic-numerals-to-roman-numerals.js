"use strict";
const arabicNumeral = 8;
let romanNumeral = "";
if ((arabicNumeral % 5) > 0) {
	//console.log(Math.floor(arabicNumeral / 5));
	romanNumeral += "V";
}
console.log(romanNumeral);
