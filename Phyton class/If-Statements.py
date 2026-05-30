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
        print(f"Calculated number is: {calculated}")
    elif calculated.is_integer():
        calculated = int(calculated)
        print(f"Calculated number is: {calculated}")
    else:
        print("Thats not a number cuh")
elif operator == "-":
    calculated = num1 - num2
    if not calculated.is_integer():
        print(f"Calculated number is: {calculated}")
    elif calculated.is_integer():
        calculated = int(calculated)
        print(f"Calculated number is: {calculated}")
    else:
        print("Thats not a number cuh")
elif operator == "*":
    calculated = num1 * num2
    if not calculated.is_integer():
        print(f"Calculated number is: {calculated}")
    elif calculated.is_integer():
        calculated = int(calculated)
        print(f"Calculated number is: {calculated}")
    else:
        print("Thats not a number cuh")
elif operator == "/":
    calculated = num1 / num2
    if not calculated.is_integer():
        print(f"Calculated number is: {calculated}")
    elif calculated.is_integer():
        calculated = int(calculated)
        print(f"Calculated number is: {calculated}")
    else:
        print("Thats not a number cuh")
else:
    print("Please enter a valid Operator....")



#-------------------Python Calculator-----------------------------a
