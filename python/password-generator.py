import string
import random
s = string.ascii_letters
i = 0
p = ""
while i < 9:
	p += random.choice(s)
	i += 1
print(f"This password is too simple: {p}")
