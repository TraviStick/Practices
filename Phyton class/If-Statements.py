age = int(input("Enter your age: "))

if age > 18: print("kill")
elif age == 18: print("Live")
else: print("yo")

#-------------------------------------
response = input("Are u? are you? coming thru the trees?(Y/N): ")
if response == "Yes": print("Certified brainrot")
else: print("you aint brainrotting")

#-------------------Python Calculator-----------------------------
print("Standard Calculator")
num1 = float(input("Enter 1st number: "))
operator = input("Enter an Operator(+, -, *, /): ")
num2 = float(input("Enter 2nd number: "))
calculated = 0.0

if operator == "+":
    calculated = num1 + num2
    if not calculated.is_integer():
        calculated = float(calculated)
    elif calculated.is_integer():
        calculated = int(calculated)
elif operator == "-":
    calculated = num1 - num2
    if not calculated.is_integer():
        calculated = float(calculated)
    elif calculated.is_integer():
        calculated = int(calculated)
elif operator == "*":
    calculated = num1 * num2
    if not calculated.is_integer():
        calculated = float(calculated)
    elif calculated.is_integer():
        calculated = int(calculated)
elif operator == "/":
    calculated = num1 / num2
    if not calculated.is_integer():
        calculated = float(calculated)
    elif calculated.is_integer():
        calculated = int(calculated)
else:
    print("Please enter a valid Operator....")
print(f"Calculated number is: {calculated}")    



#-------------------Python Calculator-----------------------------a
import math
weight = float(input("Enter Weight: "))
unit = input("Is this a Pound or Kg?(P/K): ")
if unit == "K":
    weight *= 2.205
    unit = "Kgs."
elif unit == "P":
    weight /= 2.205
    unit = "Lbs."
else:
    print("Pls Enter a valid unit")

print(f"Ur weight is {round(weight, 3)}{unit}")    