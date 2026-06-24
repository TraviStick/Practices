name = input("Enter Full Name: ")
#len() - Returns a number(Int) from the length of the string from the input
result = len(name) 
print(f"length of the string is {result}")

#.find() | .rfind() - Returns an Int from the first and last occurrence from the input
result = name.find(" ") + 1
print(f"first occurrence was in {result}")
result = name.rfind(" ") + 1
print(f"last occurrence was in {result}")

#.capitalize() - Capitalize the first letters
name = name.capitalize()
print(name)

#.upper() | .lower() - Capitalize | lowers all letters
name = name.upper()
print(name)
name = name.lower()
print(name)

#.isdigit() | .isalpha() - Returns a boolean if the input only contains a digit | alphabetical
result = name.isdigit()
print(result)
result = name.isalpha()
print(result)

#.count("Ex") - Counts how many is inside
result = name.count("tt")
print(result)

#.replace("ex", "xe") - (Most useful here) replaces any A to B
name = name.replace("t","r")
print(name)







#-----------Validate User Input Exercise--------------------
#1. user is no more than 12 chars
#2. user must not contain any spaces
#3. username must not contain any digits

user = input("Please enter user: ")
is_digit = user.isdigit()
length = len(user)
spaces = user.count(" ")
if length >= 12 or spaces > 0 or is_digit:
    print("Try Again")
else:
    print(user)
