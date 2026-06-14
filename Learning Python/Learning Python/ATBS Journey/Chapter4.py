# The Collatz Sequence
import time,sys
def collatz(number):
    if number % 2 == 0:
        result = number // 2    
    else:
        result = 3 * number + 1
    print(result, end = ' ')
    return result        
user_input = int(input('Enter a number: '))
print(user_input, end = ' ')
time.sleep(1)

while user_input != 1:
    user_input = collatz(user_input)
    time.sleep(1)
else:
    sys.exit()
