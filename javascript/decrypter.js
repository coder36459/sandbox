let l = "abcdefghijklmnopqrstuvwxyz", a = [];
a = l.split("");

function decrypter(t, c) {
	text = t;
	cipher = c;
	decrypt = "";
	d = text.split("");
	i = 0;
	while (i < d.length) {
		if (d[i] == " " || d[i] == "," || d[i] == "(" || d[i] == ")") {
			decrypt += d[i];
			}
		else {
			if (a.indexOf(d[i]) < cipher) {
				decrypt += a[a.length + a.indexOf(d[i]) - cipher];
				}
			else {
				decrypt += a[a.indexOf(d[i]) - cipher];
				}
			}
		i += 1;
		}
	return decrypt;
	}
console.log(decrypter("xyfwy knsnxm", 5))
