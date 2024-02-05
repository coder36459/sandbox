print("\n\tColors of the Rainbow\n")
b = ["\33[41m ", "\33[43m ", "\33[42m ", "\33[46m ", "\33[44m ", "\33[45m "]
i = 0
while i < len(b):
	j = 0
	while j < 3:
		print("\t" + 45 * b[i])
		j += 1
	i += 1
print("\33[0m ")
