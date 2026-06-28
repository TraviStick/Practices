import random,time
heads = 0
tails = 0
rolls = 0
for i in range(1, 1001):
    randoms = random.randint(0, 1)
    if randoms == 1:
        heads +=1
    elif randoms == 0:
        tails += 1
    if i == 500:
        print('Halfway done!')   
    rolls += 1
print('Heads came up ' + str(heads) + ' times. While tails came up '  + str(tails) +' times. Total rolls '+str(rolls))