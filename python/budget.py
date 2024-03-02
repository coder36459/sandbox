class Category:
		
	def __init__(self, name):
		self.name = name
		self.ledger = []
	
	def deposit(self, amount, description=False):
		if description != False:
			self.ledger.append({"amount": amount, "description": description})
		else:
			self.ledger.append({"amount": amount, "description": ""})
	
	def withdraw(self, amount, description=False):
		if description != False:
			if self.get_balance() >= amount:
				self.ledger.append({"amount": -amount, "description": description})
				return True
			else:
				return False
		else:
			if self.get_balance() >= amount:
				self.ledger.append({"amount": -amount, "description": ""})
				return True
			else:
				return False
	
	def get_balance(self):
		funds = 0
		for x in self.ledger:
			funds += x["amount"]
		return funds
	
	def transfer(self, amount, budget_category):
		if self.get_balance() >= amount:
			self.withdraw(amount, "Transfer to " + budget_category.name)
			budget_category.deposit(amount, "Transfer from " + self.name)
			return True
		else:
			return False
	
	def check_funds(self, amount):
		if self.get_balance() >= amount:
			return True
		else:
			return False

def create_spend_chart(categories):
    pass

food = Category("Food")
food.deposit(1000, "deposit")
food.withdraw(10.15, "groceries")
food.withdraw(15.89, "restaurant and more food for dessert")
clothing = Category("Clothing")
food.transfer(50, clothing)
print(food.ledger)
