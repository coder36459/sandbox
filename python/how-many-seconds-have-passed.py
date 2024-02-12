import os
import time
i = 1
try:
	while True:
		print("How many seconds have passed since you started this program?\n" + str(i) + "\n\nPress Ctrl+C to exit")
		time.sleep(1)
		os.system("clear")
		i += 1
except KeyboardInterrupt:
	pass
