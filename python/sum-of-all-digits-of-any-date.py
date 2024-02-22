import datetime
n = datetime.datetime.now()
o = str(n.year) + "-" + n.strftime("%m") + "-" + str(n.day) + "\n"
print(f"Enter the date, for example: {o}")
try:
	while True:
		y = int(input("Year: "))
		m = int(input("Month: "))
		d = int(input("Day: "))
		try:
			while True:
				v = datetime.datetime(y,m,d)
				f = str(y) + "-"
				if m >= 10:
					f += str(m) + "-"
				if m < 10:
					f += "0" + str(m) + "-"
				if d >= 10:
					f += str(d)
				if d < 10:
					f += "0" + str(d)
				print(f"\nYou entered the date: {f}")
				a = (y + m + d)
				b = str(a)
				e = len(b)
				c = []
				c1 = 0
				for x in b:
					c += x
					c1 += int(x)
				i = 0
				h = ""
				while i < e:
					if i < e - 1:
						h += str(c[i]) + " + "
					else:
						h += str(c[i])
					i += 1
				g = []
				if c1 % 9 == 0:
					o = 9
				else:
					o = c1 % 9
				for x in str(c1):
					g += x
				if c1 > 9:
					k = "= " + g[0] + " + " + g[1] + " = " + str(o)
				else:
					k = ""
				print(f"The sum of all the digits of a given date is {o}.\n\nBelow you will find the computations.\n\n{d} + {m} + {y} = {a} = {h} = {c1} {k}")
				break
		except:
			print("You entered the wrong date, try again.")
		break
except:
	print("Error, please try again.")
