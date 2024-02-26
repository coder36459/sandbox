import string
s = string.ascii_lowercase
a = []
for x in s:
	a += x
i = 0
a.append("$")
while i < 9:
	print(f"{a[i]} - {i + 1}  ||  {a[i + 9]} - {i + 10}  ||  {a[i + 18]} - {i + 19}")
	i += 1
