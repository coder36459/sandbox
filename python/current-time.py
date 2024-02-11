import os
import time
f = "%A, %B %d, %Y, %I:%M:%S %p"
try:
	while True:
		t = time.localtime()
		p = time.strftime(f, t)
		print("Current time: " + p + "\n\nPress Ctrl+C to exit")
		time.sleep(1)
		os.system("clear")
except KeyboardInterrupt:
	pass
