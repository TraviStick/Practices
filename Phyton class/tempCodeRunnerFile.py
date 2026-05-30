print("Standard Calculator")
num1 = float(input("Enter 1st number: "))
operator = input("Enter an Operator(+, -, *, /): ")
num2 = float(input("Enter 2nd number: "))
calculated = 0.0

if operator == "/":
    calculated = num1 / num2
    if not calculated.is_integer():
        print(f"Calculated number is: {calculated}")
    elif calculated.is_integer():
        calculated = int(calculated)
        print(f"Calculated number is: {calculated}")
    else:
        print("nuh uh")
else:
    print("no")