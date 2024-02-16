import string
import random
s = string.ascii_letters
a = []
i = 1
while i < 12:
	a.append(i)
	i += 1
def gen():
	y = random.choice(a)
	j = 0
	z = ""
	while j < y:
		x = random.choice(s)
		z += x
		j += 1
	z += " "
	return z
t = ""	
w = 0
g = 200
while w < g:
	t += gen()
	w += 1
c = len(t) - 1
print(f"{t}\n\nThis program generated {g} words and {c} characters.")
