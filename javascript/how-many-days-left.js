"use strict";
const date = new Date();
console.log(date.getFullYear());
const month = date.getMonth() + 1;
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log();
function lessThanTen(n) {
	let s = String(n);
	s = "0" + s;
	return s;
}
if (month < 10) {
	console.log(lessThanTen(month));
}
else {
	console.log(String(month));
}
