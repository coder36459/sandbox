"use strict";
const date = new Date();
console.log(date.getFullYear());
const month = date.getMonth() + 1;
let s = "";
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log();
if (month < 10) {
	s = "0" + String(month);
}
else {
	s = String(month);
}
console.log(s);
