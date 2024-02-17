def arithmetic_arranger(problems):
	p = problems
	lp = len(p)
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
							print(2 * " " + b[0] + "\n" + b[1] + " " + b[2] + "\n" + (l1 + 2) * "-")
						if l1 > l2:
							print(2 * " " + b[0] + "\n" + b[1] + (l1 - l2 + 1) * " " + b[2] + "\n" + (l1 + 2) * "-")
						if l1 < l2:
							print((l2 - l1 + 2) * " " + b[0] + "\n" + b[1] + " " + b[2] + "\n" + (l2 + 2) * "-")
						if b[1] == "+":
							o3 = o1 + o2
							l3 = len(str(o3))
							if l3 > l1:
								print(" " + str(o3) + "\n")
							else:
								print(2 * " " + str(o3) + "\n")
						if b[1] == "-":
							o3 = o1 - o2
							l3 = len(str(o3))
							if l3 == l1:
								print(2 * " " + str(o3) + "\n")
							else:
								print(" " + str(o3) + "\n")
					else:
						print("Error: Numbers cannot be more than four digits.")
				else:
					print("Error: Numbers must only contain digits.")
			else:
				print("Error: Operator must be '+' or '-'.")
	else:
		print("Error: Too many problems.")

arithmetic_arranger(["32 + 8", "1 - 3801", "9999 + 9999", "523 - 49"])
