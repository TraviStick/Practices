import random
coin_list = []
headStreaks = 0
tailStreaks = 0
number_of_streaks = 0

 # Code that creates a list of 100 'heads' or 'tails' values
for i in range(50): # Run 100 experiments total.
    flip = random.choice(['H', 'L'])
    if flip == 'H':
        coin_list.append('H')
    else:
        coin_list.append('L')
# Code that checks if there is a streak of 6 heads or tails in a row
for i in range(len(coin_list)):
    if coin_list[i:i+6] == ['H','H','H','H','H','H']:
        headStreaks += 1
    elif coin_list[i:i+6] == ['L','L','L','L','L','L']:
        tailStreaks += 1
number_of_streaks = headStreaks + tailStreaks
print(f'Chances of Head Streak: {headStreaks/100}%.\nChances of tail streak: {tailStreaks/100}%.\nTotal streak chances: {number_of_streaks/100}')
