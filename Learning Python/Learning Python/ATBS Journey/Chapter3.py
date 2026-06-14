# for Loops and the range() Function
import random
for i in range(5):
    print(random.randint(1, 10))

# Ending a Program Early with sys.exit()
import sys
while True:
    print('Type exit to exit.')
    response = input('>')
    if response == 'exit':
        break
    print('You typed ' + response + '.')
print('You exited')    

# A Short Program: Guess the Number
import random, sys
print('I am thinking of a number between 1 and 20.')
ranum = random.randint(1, 20)
counter= 0
while True:
    counter += 1
    print('Take a guess')
    guess = int(input('>'))
    if guess > ranum:
        print('Your guess is too high.')
    elif guess < ranum:
        print('Your guess is too low.')
    elif guess == ranum:
        print(f'Good job! You got it in {counter} guesses!')
        break#sys.exit() 


# A Short Program: Rock, Paper, Scissors
import random, sys, time
print('ROCK, PAPER, SCISSORS')
wins = 0 
loss = 0
ties = 0
while True: # main loop
    print(f'{wins} WINS, {loss} LOSSES, {ties} TIES')
    print('Enter your move: (r)ock (p)aper (s)cissors or (q)uit')
    move = input(">")
    if move == 'q':
        sys.exit()          
    if move == 'r':
        print('ROCK versus...', end = '')
        time.sleep(2)
    elif move == 'p':
        print('PAPER versus...', end = '')
        time.sleep(2)
    elif move == 's':
        print('SCISSORS versus...', end = '')
        time.sleep(2)
    else: # if the user doesn't enter neither
        time.sleep(1)
        print("Please enter ([r][p][s][q])")
        time.sleep(2)
        continue
    random_number = random.randint(1,3)
    if random_number == 1:
        computer_move = 'r'
        time.sleep(2)
        print('ROCK')
    elif random_number == 2:
        computer_move = 'p'
        time.sleep(2)
        print('PAPER')
    elif random_number == 3:
        computer_move = 's'
        time.sleep(2)
        print('SCISSOR')
    if move == computer_move:
        ties += 1
        time.sleep(1)
        print('It is a tie!')
    elif move == 'r' and computer_move == 's':
        wins += 1
        time.sleep(1)
        print('You win!')
    elif move == 's' and computer_move == 'p':
        wins += 1
        time.sleep(1)
        print('You win!')
    elif move == 'p' and computer_move == 'r':
        wins += 1
        time.sleep(1)
        print('You win!')          
    elif move == 'r' and computer_move == 'p':
        loss += 1
        time.sleep(1)
        print('You lose!')  
    elif move == 's' and computer_move == 'r':
        loss += 1
        time.sleep(1)
        print('You lose!')  
    elif move == 'p' and computer_move == 's':
        loss += 1
        time.sleep(1)
        print('You lose!')          
     