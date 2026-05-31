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