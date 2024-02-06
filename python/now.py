import datetime
def today():
	n = datetime.datetime.now()
	d = ""
	m = n.strftime(" %B ")
	y = str(n.year)
	if n.day == 1 or n.day == 21 or n.day == 31:
		d = str(n.day) + "st"
	if n.day == 2 or n.day == 22:
		d = str(n.day) + "nd"
	if n.day == 3 or n.day == 23:
		d = str(n.day) + "rd"
	else:
		if n.day != 1 and n.day != 2 and n.day != 3 and n.day != 21 and n.day != 22 and n.day != 23 and n.day != 31:
			d = str(n.day) + "th"
	return "Today is " + d + m + y
if __name__ == "__main__":
	p = today()
	print(p)
