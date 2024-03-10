import copy
import random
# Consider using the modules imported above.

class Hat:
	
	def __init__(self, **kwargs):
		self.color_number = {**kwargs}
		self.contents = []
		for x in self.color_number:
			i = 0
			while i < self.color_number[x]:
				self.contents.append(x)
				i += 1
				
		self.numberOfBallsInTheHat = len(self.contents)
	
	def draw(self, numberOfBallsToDraw):
		
		drawnBalls = []
		
		if numberOfBallsToDraw > self.numberOfBallsInTheHat:
			return self.contents
		
		i = 0
		while i < numberOfBallsToDraw:
			ball = random.choice(self.contents)
			self.contents.remove(ball)
			drawnBalls.append(ball)
			i += 1
			
		return drawnBalls

def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
	
	expected = []

	for c, a in expected_balls.items():
		i = 0
		while i < a:
			expected.append(c)
			i += 1
			
	j = 0
	m = 0
	while j < num_experiments:
		chat = copy.deepcopy(hat)
		drawn = chat.draw(num_balls_drawn)
		ex = copy.copy(expected)
		dr = copy.copy(drawn)
		compared = []
		
		for d in sorted(dr):
			for e in sorted(ex):
					if d == e and dr.count(d) == ex.count(e):
						try:
							dr.remove(d)
							ex.remove(e)
							compared.append(d)
						except:
							pass
					else:
						for d in sorted(dr):
							for e in sorted(ex):
								if d == e and (dr.count(d) > 0 and ex.count(e) > 0):
									dr.remove(d)
									ex.remove(e)
									compared.append(d)
											
		if sorted(expected) == sorted(compared):
			m += 1
			
		j += 1

	return m / num_experiments

a = [Hat(yellow=3, blue=2, green=6), Hat(red=5, orange=4), Hat(red=5, orange=4, black=1, blue=0, pink=2, striped=9), Hat(black=6, red=4, green=3), Hat(blue=3, red=2, green=6)]

def first_test(h):
	hat = h
	probability = experiment(hat=hat, expected_balls={"blue":2,"green":1}, num_balls_drawn=4, num_experiments=1000)
	return f"First test:\nBalls in the hat: {hat.color_number}\nExpected balls: {{'blue': 2, 'green': 1}}\nProbability: {probability}\n"

def second_test(h):
	hat = h
	probability = experiment(hat=hat,expected_balls={"red":2,"green":1},num_balls_drawn=5,num_experiments=2000)
	return f"Second test:\nBalls in the hat: {hat.color_number}\nExpected balls: {{'red': 2, 'green': 1}}\nProbability: {probability}\n"

i = 0
j = 0
while j < 6:
	if i == 0:
		if j == 5:
			break
		print(first_test(a[j]))
		i += 1
	elif i == 1:
		j = j - 1
		print(second_test(a[j]))
		print(("Hat" + str(j + 1)).center(77, "*") + "\n")
		i -= 1
	j += 1
