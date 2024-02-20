import datetime
n = datetime.datetime.now()
y = n.year
m = n.month
d = n.day
a = (y + m + d)
b = str(a)
e = len(b)
c = []
f = 0
for x in b:
	c += x
i = 0
while i < e:
	f += int(c[i])
	i += 1
g = f % 9
h = n.strftime("%B")
k = c[0] + " + " + c[1] + " + " + c[2] + " + " + c[3]
l = []
for x in str(f):
	l += x
o = l[0] + " + " + l[1]
print(f"Today is {d} {h} {y}.\nThe sum of all digits today is {g}.\nBelow you will find the computations.\n\n{d} + {m} + {y} = {a} = {k} = {f} = {o} = {g}")
