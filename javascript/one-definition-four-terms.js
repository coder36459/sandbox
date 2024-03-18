let a = ["definition A", "term A", "definition B", "term B", "definition C", "term C", "definition D", "term D", "definition E", "term E", "definition F", "term F"], b = [], c = [], i = 0, e = [], f = [], d;
while (i < a.length) {
	if (i % 2) {
		c.push(a[i]);
		}
	else {
		b.push(a[i]);
		}
	i += 1;
	}
console.log(b);
console.log(c);
d = Math.floor(Math.random() * b.length);
e.push(b[d]);
f.push(c[d]);
console.log();
i = 0;
while (i < 10e2) {
	if (f.length < 4) {
		d = Math.floor(Math.random() * b.length);
		if (f.includes(c[d]) == false) {
			f.push(c[d]);
			}
		}
	i += 1;
	}
f.sort();
console.log(e);
console.log(f);
