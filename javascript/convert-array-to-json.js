let a = [" ", "A - D", "B - E", " ", "C - F", " "];
let b = [];
let c = [];

for (x in a) {
	if (a[x] != false) {
		b.push(a[x]);
		}
	}

for (x in b) {
	c.push(b[x].split(" - "));
	}

const myJSON = JSON.stringify(c);
let d = JSON.parse(myJSON);

console.log("Delete empty fields from an array.");
console.log(a);
console.log(a.length + " items in total");
console.log("\nDelete dashes from each item.");
console.log(b);
console.log("\nCreate a new array with two items.");
console.log(c);
console.log("\nConvert JavaScript array into a string (JSON notation).");
console.log(myJSON);
console.log("\nConvert a string into a JavaScript array.");
console.log(d);
console.log(d.length + " items in total");
