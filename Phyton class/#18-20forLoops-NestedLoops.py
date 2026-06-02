hi = "hi"
for sor in hi:
    if sor == "g":
        print("Fuck you")
        break
    print(sor)

#-----------countdown timer program----------
import time
my_sec = int(input("Enter time in sec: "))

for x in reversed(range(1,my_sec+1)):
    seconds = x % 60
    minutes = int(x/60) % 60
    hours = int(x/3600) % 60
    print(f"{hours:02}:{minutes:02}:{seconds:02}")
    time.sleep(1)


#-------------Nested Loops
import time
for x in range(10,0,-1):
    print(x,end=" ")
    time.sleep(1)

#---------------advanced countdown
import time
my_sec = int(input("Enter time in sec: "))
my_min = int(input("Enter time in min: "))
my_hr = int(input("Enter time in hr: "))

for h in reversed(range(my_hr+1)):
    for m in reversed(range(60 if h < my_hr else my_min+1)):
        for s in reversed(range(60 if (h < my_hr or m < my_min) else my_sec+1)):
            print(f"{h:02}:{m:02}:{s:02}")
            time.sleep(1)

#-------Symbols
rows = 5

for i in range(rows):
    spaces = rows - i - 1
    stars = 2 * i + 1
    print(" " * spaces + "*" * stars)

