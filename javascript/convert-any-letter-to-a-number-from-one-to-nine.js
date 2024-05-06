"use strict";
const anyString = "ABC";
const letters = [];
let i = 97;
while (i < 123) {
	letters.push(String.fromCharCode(i).toUpperCase());
	i += 1;
}
console.log(letters);
