"use strict";
const date = new Date();
function dateTime (d) {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const hour = date.getHours();
	const minute = date.getMinutes();
	const second = date.getSeconds();
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
