friends = 9
friends  += 1
print(friends) #adds friends by 1

friends = 9
friends -= 1
print(friends) #reduces friends by 1

friends = 9
friends *= 2
print(friends) #multiplies friends by 2

friends = 9
friends /= 3
print(friends) #divides friends by 3

friends = 9
friends **= 2
print(friends) #adding exponent friends by 2

friends = 9
friends %= 2 
print(friends) #shows the remainder of friends when dividing into 2 



x = 3.14
y = -4
z = 3
print(f"your absolute is {abs(y)}")
print(f"your power is {pow(y,z)}")
print(f"your max number is {max(x,y,z)}")
print(f"your minimum is {min(x,y,z)}")


import math
x = 9
z = 3.92
print(round(math.pi,2)) #rounds the number
print(math.ceil(math.e)) #rounds up the number 
print(math.floor(math.sqrt(z))) #rounds down the number
print(int(math.sqrt(x))) #finds the square root of the number




import math #Exercise#1 for this lesson "Finding the circumference of a circle"
radius = float(input("What is the radius of the circle?: "))
circumference = 2*math.pi*radius
print(f"The circumference of the circle with the radius of {radius}, is ~{round(circumference,2)}cm")



import math #Exercise#2 for this lesson "Computing the area of a circle"
radius = float(input("What is the radius of the circle?: "))
area = math.pi*pow(radius,2)
print(f"The area of the circle with the radius of {radius}², is ~{round(area, 2)}cm²")


import math #Exercise#3 for this lesson "Finding the Hypotenuse of a right triangle"
a = float(input("What is your side a?: "))
b = float(input("What is your side b?: "))
c = math.sqrt(pow(a, 2)+pow(b, 2))
print(f"Your hypotenuse of a = {int(a)}² and b = {int(b)}², is c = {int(c)}²")