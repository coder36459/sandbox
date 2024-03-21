let l = "abcdefghijklmnopqrstuvwxyz", a = [];
a = l.split("");
data = "start finish";
de = encrypter(data, 5);

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
console.log(de)

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
console.log(decrypter(de, 5))

function check(data, decr) {
	a = data;
	b = decr;
	if (a == b) {
		return "Success";
		}
	else {
		return "Something is wrong";
		}
	}
console.log(check(data, decrypter(de, 5)));
