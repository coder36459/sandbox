let a = [], i = 0, r;
while (i < 49) {
	r = Math.floor(Math.random() * 49);
	if (a.includes(r) != true) {
		if (a.length < 6) {
			a.push(r);
			}
		}
	i += 1;
	}
console.log(a);
