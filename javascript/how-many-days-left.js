"use strict";
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
console.log(minute);
console.log(date.getSeconds());
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
console.log();
