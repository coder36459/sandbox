import datetime
import now
d = datetime.datetime.now()
a = ""
c = 0
i = 1
while i < 13:
	x = datetime.datetime(d.year, i, 1)
	if i == 1:
		a += x.strftime("%B ") + str(d.year) + "\n"
	else:
		a += "\n\n" + x.strftime("%B ") + str(d.year) + "\n"
	j = 1
	if i == 1 or i == 3 or i == 5 or i == 7 or i == 8 or i == 10 or i == 12:
		while j < 32:
			if j < 10:
				a += "0" + str(j) + " "
			if j >= 10:
				a += str(j) + " "
			if j == 7 or j == 14 or j == 21 or j == 28:
				a += "\n"
			j += 1
			c += 1
	if i == 2 and d.year % 4 == 0:
		while j < 30:
			if j < 10:
				a += "0" + str(j) + " "
			if j >= 10:
				a += str(j) + " "
			if j == 7 or j == 14 or j == 21 or j == 28:
				a += "\n"
			j += 1
			c += 1
	if i == 2 and d.year % 4 != 0:
		while j < 29:
			if j < 10:
				a += "0" + str(j) + " "
			if j >= 10:
				a += str(j) + " "
			if j == 7 or j == 14 or j == 21 or j == 28:
				a += "\n"
			j += 1
			c += 1
	else:
		if i != 2:
			while j < 31:
				if j < 10:
					a += "0" + str(j) + " "
				if j >= 10:
					a += str(j) + " "
				if j == 7 or j == 14 or j == 21 or j == 28:
					a += "\n"
				j += 1
				c += 1
	i += 1
print(a)
print("\n" + "This year has " + str(c) + " days.\n" + now.today())
