"use strict";
const date = new Date();
const ye = date.getFullYear();
const untilWhen = new Date(ye,11,31,23,59,59);
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
