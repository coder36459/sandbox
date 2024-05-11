"use strict";
const question = "How many days have passed since ";
const today = new Date();
const since = new Date(2024,1,4);
function date(d) {
	const year = d.getFullYear();
	const month = d.getMonth() + 1;
	const day = d.getDate();
	function formatDate(f) {
		let fd;
		if (f < 10) {
			fd = "0" + f;
		}
		else {
			fd = f;
		}
		return fd;
	}
	const ymd = year + "-" + formatDate(month) + "-" + formatDate(day);
	return ymd;
}
console.log("Today is " + date(today) + ".\n");
console.log(question + date(since) + "?");
const a = today.getTime();
const b = since.getTime();
const c = a - b;
console.log(Math.floor(c / (24 * 60 * 60 * 1000)) + " days have passed since that day.");
