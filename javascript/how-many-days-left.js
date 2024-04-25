"use strict";
const date = new Date();
const ye = date.getFullYear();
const untilWhen = new Date((ye + 1),0,1,0,0,0);
function dateTime (d) {
	const year = d.getFullYear();
	const month = d.getMonth() + 1;
	const day = d.getDate();
	const hour = d.getHours();
	const minute = d.getMinutes();
	const second = d.getSeconds();
	function formatDateTime (y,m,d,h,i,s) {
		function lessThanTen (n) {
			let s = String(n);
			s = "0" + s;
			return s;
		}
		let dt = "";
		dt += y + "-";
		if (m < 10) {
			dt += lessThanTen(m) + "-";
		}
		if (m >= 10) {
			dt += m + "-";
		}
		if (d < 10) {
			dt += lessThanTen(d) + " ";
		}
		if (d >= 10) {
			dt += d + " ";
		}
		if (h < 10) {
			dt += lessThanTen(h) + ":";
		}
		if (h >= 10) {
			dt += h + ":";
		}
		if (i < 10) {
			dt += lessThanTen(i) + ":";
		}
		if (i >= 10) {
			dt += i + ":";
		}
		if (s < 10) {
			dt += lessThanTen(s);
		}
		if (s >= 10) {
			dt += s;
		}
		return dt;
	}
	return formatDateTime (year,month,day,hour,minute,second);
}
console.log(dateTime (date));
console.log(dateTime (untilWhen));
const a = date.getTime();
const b = untilWhen.getTime();
const c = b - a;
const d = Math.floor(c / (24 * 60 * 60 * 1000));
console.log("\nHow many days are left until the end of the year?");
if (d == 0) {
	console.log("Today is the last day of the year.");
}
if (d == 1) {
	console.log("One day left until the end of the year.");
}
if (d > 1) {
	console.log(d + " days left until the end of the year.");
}
const h = Math.floor((c - (d * 24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
const m = Math.floor((c - (d * 24 * 60 * 60 * 1000) - (h * 60 * 60 * 1000)) / (60 * 1000));
const s = Math.floor((c - (d * 24 * 60 * 60 * 1000) - (h * 60 * 60 * 1000) - (m * 60 * 1000)) / 1000);
console.log("\nHow much time is left until the end of the year?\n" + d + " days " + (h - 1) + " hours " + m + " minutes" + " and " + s + " seconds.");
