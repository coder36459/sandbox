import datetime
d = datetime.datetime.now()
c = 0
i = 1
while i < 13:
	j = 1
	while j < 32:
		try:
			x = datetime.datetime(d.year,i,j)
			if i >= 10 and j >= 10:
				print(str(d.year) + "-" + str(i) + "-" + str(j))
				c += 1
			if i >= 10 and j < 10:
				print(str(d.year) + "-" + str(i) + "-0" + str(j))
				c += 1
			if i < 10 and j >= 10:
				print(str(d.year) + "-0" + str(i) + "-" + str(j))
				c += 1
			if j < 10 and i < 10:
				print(str(d.year) + "-0" + str(i) + "-0" + str(j))
				c += 1
		except:
			if i == 0:
				print()
		j += 1
	i += 1
print("\n" + "This year has " + str(c) + " days.")
