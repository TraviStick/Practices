# collection is just array
# List = [] ordered and changeable, duplicable
# Set = {} unordered and cant alter, can Add/Remove but not duplicable
# Tuple = () ordered and unchangeable, dublicable and faster




# List = [] ordered and changeable, duplicable

fruits = ["Apple", "Orange", "Mango"]
print("Manga" in fruits) #Finds if its available prints a Boolean
fruits[0] = "Saging" #overwrite the existing or add if
fruits.append("Banana") #adds in first
fruits.remove("Banana")# remove the existing
fruits.insert(0, "papaya")# insert at a given index
fruits.sort()# sorts in alpha
fruits.reverse()# reverse the lists NOT in alphabetical but in index
fruits.clear()#Clear the entire lists
print(fruits.index("Apple"))# returns an int based on where its located 
print(fruits.count("Banana"))# counts how many in the lists
print(len(fruits))
print(fruits[2])
for fruit in fruits:
    print(fruit)


#---------Shopping cart program

foods = []
prices = []
total = 0.

while True:

    food = input("Enter a food to buy (q to quit): ")

    if food == "q" or food == "Q":
        break
    else:
        price = float(input(f"Enter a price of {food}: $"))
        foods.append(food)
        prices.append(price)
print("-----Your Cart-----")

for i in range(len(foods)):
    food = foods[i]
    price = prices[i]
    print(f"{food} are ${price} each")

for price in prices:     
    total += price
print(f"Your total bill is ${total}")
