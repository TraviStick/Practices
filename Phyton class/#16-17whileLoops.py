name = input("Enter your fav food q to quit: ")

while not name == "q":
    if name == "booty":
        print(f"You eat {name}?")
        ans1 = input("Answer: ")
        if ans1 == "uh uh":
            print("You lick coochie?")
            ans2 = input("Answer: ")
            if ans2 == "mh hm":
                exit
    name = input("Enter your name: ")
else:
    print(f"Your name is {name}?")


#------------------Compound Interest Calculator------------------
initial = 0
rate = 0
time = 0

while True:
    initial = float(input("Enter Initial Principal: "))
    if initial < 0:
        print("Please enter above 0")
    else:
        break
while True:
    rate = float(input("Enter Interest Rate %: "))
    if rate < 0:
        print("Please enter above 0")
    else:
        break
while True:
    time = float(input("Enter Amount of Time(Years): "))
    if time < 0:
        print("Please enter above 0")
    else:
        break

final = initial * pow((1+rate/100),time)
print(f"Balance is now ${final:.2f} after {time} Year/s")