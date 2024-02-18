def arithmetic_arranger(problems, solutions=False):
	sh = solutions
	p = problems
	lp = len(p)
	a = []
	if lp < 6:
		for x in p:
			b = x.split()
			if b[1] == "+" or b[1] == "-":
				if b[0].isnumeric() and b[2].isnumeric():
					o1 = int(b[0])
					o2 = int(b[2])
					if  o1 < 10e3 and o2 < 10e3:
						l1 = len(b[0])
						l2 = len(b[2])
						if l1 == l2:
							a.append(2 * " " + b[0])
							a.append(b[1] + " " + b[2])
							a.append((l1 + 2) * "-")
						if l1 > l2:
							a.append(2 * " " + b[0])
							a.append(b[1] + (l1 - l2 + 1) * " " + b[2])
							a.append((l1 + 2) * "-")
						if l1 < l2:
							a.append((l2 - l1 + 2) * " " + b[0])
							a.append(b[1] + " " + b[2])
							a.append((l2 + 2) * "-")
						if b[1] == "+" and sh == True:
							o3 = o1 + o2
							l3 = len(str(o3))
							if l3 > l1:
								a.append(" " + str(o3))
							else:
								a.append(2 * " " + str(o3))
						if b[1] == "-" and sh == True:
							o3 = o1 - o2
							l3 = len(str(o3))
							if l3 == l1:
								a.append(2 * " " + str(o3))
							else:
								a.append(" " + str(o3))
					else:
						print("Error: Numbers cannot be more than four digits.")
				else:
					print("Error: Numbers must only contain digits.")
			else:
				print("Error: Operator must be '+' or '-'.")
	else:
		print("Error: Too many problems.")
	i = 0
	la = len(a)
	if sh == True:
		if la == 4:
			while i < 4:
				print(a[i])
				i += 1
		if la == 8:
			while i < 4:
				print(a[i] + 4 * " " + a[i + 4])
				i += 1
		if la == 12:
			while i < 4:
				print(a[i] + 4 * " " + a[i + 4] + 4 * " " + a[i + 8])
				i += 1
		if la == 16:
			while i < 4:
				print(a[i] + 4 * " " + a[i + 4] + 4 * " " + a[i + 8] + 4 * " " + a[i + 12])
				i += 1
		if la == 20:
			while i < 4:
				print(a[i] + 4 * " " + a[i + 4] + 4 * " " + a[i + 8] + 4 * " " + a[i + 12] + 4 * " " + a[i + 16])
				i += 1
	else:
		if la == 3:
			while i < 3:
				print(a[i])
				i += 1
		if la == 6:
			while i < 3:
				print(a[i] + 4 * " " + a[i + 3])
				i += 1
		if la == 9:
			while i < 3:
				print(a[i] + 4 * " " + a[i + 3] + 4 * " " + a[i + 6])
				i += 1
		if la == 12:
			while i < 3:
				print(a[i] + 4 * " " + a[i + 3] + 4 * " " + a[i + 6] + 4 * " " + a[i + 9])
				i += 1
		if la == 16:
			while i < 3:
				print(a[i] + 4 * " " + a[i + 3] + 4 * " " + a[i + 6] + 4 * " " + a[i + 9] + 4 * " " + a[i + 12])
				i += 1

arithmetic_arranger(["32 + 8", "1 - 3801", "9999 + 9999", "523 - 49"], True)
