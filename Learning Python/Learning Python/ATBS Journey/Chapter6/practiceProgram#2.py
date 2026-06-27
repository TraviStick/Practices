import random
absoluteStreak = 0
headStreaks = 0
tailStreaks = 0
number_of_streaks = 0
for experiment_number in range(10000):  # Run 100,000 experiments total.
    # Code that creates a list of 100 'heads' or 'tails' values
    coin_list = []
    for i in range(100):
        coin_list.append(random.choice(['H', 'T']))

    heads = False
    tails = False

    # Code that checks if there is a streak of 6 heads or tails in a row
    for i in range(len(coin_list)):
        if coin_list[i:i+6] == ['H','H','H','H','H','H']:
                heads = True
        elif coin_list[i:i+6] == ['T','T','T','T','T','T']:
                tails = True
    if heads or tails:
          absoluteStreak += 1
    if heads:
          headStreaks += 1
    if tails:
          tailStreaks += 1         

number_of_streaks = headStreaks + tailStreaks
print(f'Chances of Head Streak: {headStreaks} or {headStreaks/100}%.\nChances of tail streak: {tailStreaks} or {tailStreaks/100}%.\nTotal if theres a streak for each experiment: {absoluteStreak/100}%.\nTotal streak chances: {number_of_streaks} or {number_of_streaks/100}%')