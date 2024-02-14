import random
i = 1
n = []
while i < 50:
	n.append(i)
	i += 1
r = random.choice(n)
print(f"Today your lucky number is {r}")
