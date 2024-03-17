function change(number) {
	let a = [], i = 0, j = number, r;
	while (i < j) {
		r = Math.floor(Math.random() * j);
		if (a.includes(r) == false) {
			a.push(r);
			if (a.length < j) {
				i = 0;
				while (i < 10e3) {
					r = Math.floor(Math.random() * j);
					if (a.includes(r) == false) {
						a.push(r);
						}
					i += 1;
					}
				}
			}
		i += 1;
		}
	return a;
	}
console.log(change(6));
