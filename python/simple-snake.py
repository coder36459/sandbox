import os
import time
i = 1
a = ""
b = 8 * " " + "*"
while i < 11:
	if i < 10:
		a += "*"
		time.sleep(1)
		os.system("clear")
	else:
		print(f"{b}\n{b}\n{b}")
	print(a)
	i += 1
