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



#-------------------Python Weight Converter-----------------------------
import math
weight = float(input("Enter Weight: "))
unit = input("Is this a Pound or Kg?(P/K): ")
if unit == "K":
    weight *= 2.205
    unit = "Lbs."
    print(f"Ur weight is converted to {round(weight, 3)}{unit}")    
elif unit == "P":
    weight /= 2.205
    unit = "Kgs."
    print(f"Ur weight is converted to {round(weight, 3)}{unit}")    
else:
    print("Pls Enter a valid unit")




#-------------------Python Temperature Conversion---------------------------
unit = input("Is this temp a Celsius or Fahrenheit (°C/°F): ")
temp = float(input("Enter the temp: ")) 

if unit == "C":
    temp = round(((temp * 9) / 5) + 32, 1)
    print(f"Your converted temp is not {temp}°F")
elif unit == "F":
    temp = round((temp - 32) * 5/9, 1)
    print(f"Your converted temp is not {temp}°C")
else:
    print(f"{unit} isn't a valid measurement, please try again.....")