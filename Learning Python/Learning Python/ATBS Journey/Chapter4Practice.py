# The Digital Root
import sys,time
def digital_sum(number):
    userLength = len(str(number)) # using length for which is used to get the individual numbers from first to last
    solve = 0
    for i in range(userLength,0,-1):
        times = 10 ** (i - 1)
        result = number // times % 10
        solve += result
    print(solve, end=' ')
    time.sleep(1)
    return solve


user_input = int(input('Enter a number: ')) # user input

if len(str(user_input)) <= 1: # only executes if initial input == 1 digit
    user_input = digital_sum(user_input)

while len(str(user_input)) > 1: # loop
    user_input = digital_sum(user_input)
else: # only executes if remaining input == 1
    sys.exit()

