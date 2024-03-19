let l = "abcdefghijklmnopqrstuvwxyz", a = [];
a = l.split("");

function encrypter(t, c) {
	text = t;
	cipher = c;
	encrypt = "";
	b = text.split("");
	i = 0;
	while (i < b.length) {
		if (b[i] == " " || b[i] == "," || b[i] == "(" || b[i] == ")") {
			encrypt += b[i];
			}
		else {
			if (a.indexOf(b[i]) < a.length - cipher) {
				encrypt += a[a.indexOf(b[i]) + cipher];
				}
			else {
				encrypt += a[a.indexOf(b[i]) - a.length + cipher];
				}
			}
		i += 1;
		}
	return encrypt;
	}
console.log(encrypter("start finish", 5));
