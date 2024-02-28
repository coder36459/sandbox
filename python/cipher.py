import random
import string
s = string.ascii_lowercase
a = []
for x in s:
	a += x + random.choice(s)
print(a)
