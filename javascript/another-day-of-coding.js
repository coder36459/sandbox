"use strict";
const today = new Date();
const since = new Date(2024,1,4);
const a = today.getTime();
const b = since.getTime();
const c = Math.floor((a - b) / (24 * 60 * 60 * 1000)) + 1;
const d = c.toString().split("");
let s;
if (d[d.length -1] == 1) {
	s = c + "st";
}
if (d[d.length -1] == 2) {
	s = c + "nd";
}
if (d[d.length -1] == 3) {
	s = c + "rd";
}
if (d[d.length -1] >= 4 || d[d.length -1] == 0){
	s = c + "th";
}
console.log("Today is the " + s + " day of coding.");
