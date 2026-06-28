import random
number_of_streaks = 0
coinFlip=[]
def coinflips(flips):
    for experiment_number in range(100):  # Run 100,000 experiments total.
        # Code that creates a list of 100 'heads' or 'tails' values
        flip = random.randint(1,2)
        if flip == 1:
            flip.append('H')
        else:
            flip.append('L')
    return flips
        # Code that checks if there is a streak of 6 heads or tails in a row



print(coinflips(coinFlip))
