import copy
import random
# Consider using the modules imported above.

class Hat:
	
	def __init__(self, **kwargs):
		self.color_number = {**kwargs}
		print(self.color_number)
	
	def draw(self, numberOfBalls):
		pass

def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
	print(hat)
	print(expected_balls)
	print(num_balls_drawn)
	print(num_experiments)


hat1 = Hat(yellow=3, blue=2, green=6)
hat2 = Hat(red=5, orange=4)
hat3 = Hat(red=5, orange=4, black=1, blue=0, pink=2, striped=9)

hat = Hat(black=6, red=4, green=3)
probability = experiment(hat=hat,expected_balls={"red":2,"green":1},num_balls_drawn=5,num_experiments=2000)
