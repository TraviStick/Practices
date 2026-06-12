temp = -1
is_sunny = False

if 30 > temp > 0 and is_sunny:
    print("hot and day")
elif 20 > temp > 0 or is_sunny:
    print("hot or day")
elif 30 > temp > 0 and not is_sunny:
    print("cold and night")
elif 20 > temp > 0 or not is_sunny:
    print("cold or night")
else:
    print("Fuck you")
    

#------------conditional expression(one-line shortcut. also called ternary operator)--------
num = 3 
print("Even" if num % 2 == 0  else "Odd")