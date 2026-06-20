import random,logging
logging.basicConfig(level=logging.DEBUG, format=' %(asctime)s -  %(levelname)s -  %(message)s')
logging.disable()
guess = ''

try:
    while guess not in ('heads', 'tails'):
        print('Guess the coin toss! Enter heads or tails:')
        guess = input()
except Exception:
    print('Please only enter (Heads|Tails)')


toss = random.randint(0, 1)  # 0 is tails, 1 is heads
logging.debug(toss)
assert toss == 0 or toss == 1
if toss == 0:
    toss = 'tails'
else:
    toss = 'heads'
logging.debug(toss)
assert toss == 'tails' or toss == 'heads'


if toss == guess:
    print('You got it!')
else:
    print('Nope! Guess again!')
    guess = input()
    if toss == guess:
        print('You got it!')
    else:
        print('Nope. You are really bad at this game.')