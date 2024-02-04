import string
l = string.ascii_lowercase
y = [7, 4, 11, 11, 14, 22, 14, 17, 11, 3]
c = 0
s = ""
for x in y:
	c += x
	if c == 69:
		s += " "
	if x == 7 or x == 22:
		s += l[x].upper()
	else:
		s += l[x]
if c == 114:
	s += "!"
print("\33[37m" +  "\33[45m" + s)
