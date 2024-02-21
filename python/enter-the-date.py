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
				break
		except:
			print("You entered the wrong date, try again.")
		break
except:
	print("Error, please try again.")
