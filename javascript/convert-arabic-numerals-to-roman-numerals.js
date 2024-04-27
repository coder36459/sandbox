"use strict";
const n = [1,5,10,50,100,500,1000];
const l = ["I","V","X","L","C","D","M"];
const arabicNumeral = 8;
let romanNumeral = "";
console.log(n.length);
console.log(l.length);
if ((arabicNumeral % 5) > 0) {
	//console.log(Math.floor(arabicNumeral / 5));
	romanNumeral += "V";
}
console.log(romanNumeral);
