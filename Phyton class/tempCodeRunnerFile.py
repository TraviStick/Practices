num = int(input("Enter how tall the pyramid: "))

for i in range(num):
    spaces = num - i -1
    stars = 2 * i + 1
    print(" "*spaces + "*"*stars)