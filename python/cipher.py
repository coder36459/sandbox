import random
import secrets
import string
s = string.ascii_lowercase
a = []
b = []
for x in s:
	a += x + random.choice(s)
	b += x + secrets.choice(s)
print(a)
print(b)
print("".join(a))
print("".join(b))
