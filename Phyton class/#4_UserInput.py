#input func
name1 = input("whats ur name cuh?: ")
print(f"ur name is: {name1}")

age1 = int(input("how old are u cuh?: "))#transforms the age1 input into an int
age1 += 1
print(f"Ur age is ik ur lying so i added 1 to ur age {age1}? damn ur old unc")

#1st exercise solve the area of a rectangle
length = float(input("Enter Length: "))
width = float(input("Enter Width: "))
area = width*length
print(f"The area is: {area}cm²")

#2nd exercise Shopping Cart Program
item = input("Enter the name of the item you want to buy: ")
price = float(input("Enter the price of the item: "))
quantity = int(input("Enter how many item you want: "))
total = price*quantity
print(f"You have bought {item} for a total of: {total}. \nThank you for shopping with us please comeback again")