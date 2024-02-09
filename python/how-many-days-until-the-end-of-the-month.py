import datetime
import now
d = datetime.datetime.now()
x = datetime.datetime(d.year,d.month,d.day)
y = datetime.datetime(d.year,d.month + 1,1)
z = y - x
c = z.days - 1
print("How many days are left until the end of the month?")
if c == 0:
	print(now.today() + " ​so today is the last day of the month.")
if c == 1:
	print(now.today() + " so there is " + str(c)  + " day left until the end of the month.")
if c > 1:
	print(now.today() + " so there are " + str(c) + " days left until the end of the month.")
