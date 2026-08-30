import random

def has_shared_birthday(n):
    birthdays = set()

    for _ in range(n):
        # Generates a random day between 1 and 365 inclusive
        bday = random.randint(1, 365) 
        if bday in birthdays:
            return True
        birthdays.add(bday)
        
    return False

def simulate(group_size, trials):
    shared_count = 0
    for _ in range(trials):
        if has_shared_birthday(group_size):
            shared_count += 1
            
    probability = (shared_count / trials) * 100
    print(f"Probability of shared birthday in group of {group_size}: {probability:.2f}%")

# Run the simulation
simulate(23, 10000)