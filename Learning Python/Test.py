import random,time
random_number = 0

def get_random_dice_roll():
    # Returns a random integer from 1 to 6
    return random_number
def yo():
    while True:
        try: 
            global random_number
            random_number = random.randint(1, 6)
            print(get_random_dice_roll())
            time.sleep(.2)
            print(get_random_dice_roll())
            time.sleep(.2)
            print(get_random_dice_roll())
        except KeyboardInterrupt:
            return 'fuh nah'
yo()
print(random_number)
print(random_number)