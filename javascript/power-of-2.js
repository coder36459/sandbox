function powerOfTwo(n) {
	let i = 0, s = "*";
	while (i < n) {
		s += s;
		i += 1;
	}
	return s.length;
}
let i = 0;
while (i < 16) {
	console.log((i + 1) + "\t" + powerOfTwo((i + 1)));
	i += 1;
	}
